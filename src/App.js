
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieListe from './compenents/movieliste/MovieListe';
import Header from './compenents/Header/Header';
import AddFilm from './compenents/addfilm/AddFilm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoreDetail from './compenents/moredetail/MoreDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div>
      <Routes>
        <Route path="/" element={
           <div>
                <MovieListe/>
                <AddFilm/>
          </div>}/>
        <Route  path='/el/:id'  element={<MoreDetail/>}/>
        
      </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
