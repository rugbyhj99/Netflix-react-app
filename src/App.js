import './App.css';
import AppLayout from "./layout/AppLayout.jsx"
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.jsx';
import MoviePage from './pages/Movies/MoviePage.jsx';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// 홈페이지 /
// 영화 전체보여주는 페이지 (서치) /movie
// 영화 디테일 페이지 /movie/:id
function App() {
  return (
    <div>
      <Routes>        
        <Route path="/" element={ <AppLayout /> } > 
          {/* path="/"랑 똑같은 효과 index  */}
          <Route index element={ <Homepage />} />
          <Route path="movies">
            <Route index element={ <MoviePage/> } />
            <Route path=":id" element={ <MovieDetailPage />} />
          </Route>
          {/* <Route path="/movies" element={ <MoviePage/> }/>
          <Route path="/movies/:id" element={ <MovieDetailPage/> }/> 같은내용이다*/}
        </Route> 
        <Route path="*" element={ <NotFoundPage/> } />
      </Routes>
      
    </div>
  );
}

export default App;
