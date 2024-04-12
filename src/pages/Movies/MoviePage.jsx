import React, { useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { MovieCard } from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';

// 경로 2가지 
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌

// 페이제네이션 설치
// page state를 만들기
// 페이지네이션 클릭할 때 마다 page 바꿔주기
// page깞이 바뀔때 마다 useSearchMovie에 page 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const [page, setPage] = useState(1);
  const {data, isLoading, isError, error} = useSearchMovieQuery( { keyword, page } );
  console.log("서치데이터" , data);
 
  const handlePageClick = ( { selected }) => {
    setPage(selected + 1);  
  };  
  
  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner animation="border" variant="danger" style={ { width: "5rem", height: "5rem" } }/>
      </div>
    )
  }
  if (isError) {
    return <Alert variant="danger"> {error.message}</Alert>
  }
  return (
    <Container>
      <Row>
        <Col lg={2} xs={12}> 필터</Col>
        <Col lg={10} xs={12}>
          <Row>
            {
              data?.results.map((movie, index) => (
                <Col key={index} lg={4} xs={12}>
                  <MovieCard movie={movie} />
                </Col> 
              ))
            }
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} // 전체페이지 몇개인지
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page -1}            
          />
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage