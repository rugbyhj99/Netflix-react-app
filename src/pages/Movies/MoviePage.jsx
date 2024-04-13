import React, { useState, useEffect } from 'react';
import "./MoviePage.style.css";
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { MovieCard } from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MoviePage = () => {
  const [query] = useSearchParams();
  const keyword = query.get("q");
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });
  const [sortedMovies, setSortedMovies] = useState([]);
  const [sortBy, setSortBy] = useState("Popularity");
  const [totalPages, setTotalPages] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data : genreData } = useMovieGenreQuery();
  const [selectedGenre, setSelectedGenre] = useState([]);

  useEffect(() => {
    if (data?.results) {
      setTotalPages(data.total_pages);
      let results = [...data.results];
      if (sortBy === "Popularity") {
        results.sort((a, b) => b.popularity - a.popularity);
      } else if (sortBy === "The Latest") {
        results.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      } else if (sortBy === "Rating") {
        results.sort((a, b) => b.vote_average - a.vote_average);
      }
      setSortedMovies(results);
    }
  }, [data, sortBy]);

  const filteredMovies = sortedMovies.filter((movie) => {
    if (selectedGenre.length === 0) {
      return true;
    } else {
      return selectedGenre.every(genreId => movie.genre_ids.includes(genreId));
    }
  });

  const handleGenreClick = (genreId) => {
    const index = selectedGenre.indexOf(genreId);
    if (index === -1) {
      setSelectedGenre([...selectedGenre, genreId]);
    } else {
      const updatedGenre = [...selectedGenre];
      updatedGenre.splice(index, 1);
      setSelectedGenre(updatedGenre);
    }
  };

  if (isLoading) {
    return <Spinner animation="border" variant="danger" style={{ width: "5rem", height: "5rem" }} />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };  

  const getTitle = () => {
    switch(sortBy) {
      case "Popularity": return "인기도 순";
      case "The Latest": return "개봉일 순";
      case "Rating": return "평점 순";
      default: return "정렬";
    }
  };

  return (   
    <Container className="all-container">
      <Row>
        <Col lg={3} xs={12}>
          <div className="sort-container">
            <div className="box-container">
              <div className="box-toggle" onClick={toggleDropdown}>
                <h4>정렬</h4>
              </div>
              <DropdownButton
                  className="dropdown-custom"
                  id="dropdown-basic-button"
                  title={getTitle()}
                >
                  <Dropdown.Item onClick={() => setSortBy("Popularity")}>인기도 순</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSortBy("The Latest")}>개봉일 순</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSortBy("Rating")}>평점 순</Dropdown.Item>
              </DropdownButton>           
            </div>
            <div className="box-container">
              <h4>Genre</h4>
              <div className="genre-button-section">
                {
                  genreData?.map((item) => (
                    <button
                      className={`genre-button ${selectedGenre.includes(item.id) ? "selected" : ""}`}
                      key={item.id}
                      onClick={() => handleGenreClick(item.id)}
                    >
                      {item.name}
                    </button>
                ))}
              </div>
            </div>
          </div>          
        </Col>
        <Col lg={9} xs={12}>
          <Row>
            {filteredMovies.slice(0, 6).map((movie, index) => (
              <Col key={index} lg={4} xs={6} className="moviepage-img">
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={10}
            pageCount={totalPages > 500 ? 500 : totalPages}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link text-danger"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination justify-content-center "
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}            
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;