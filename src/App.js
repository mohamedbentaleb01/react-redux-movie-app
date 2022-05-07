import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
          <React.Fragment>
            <Header/>
          </React.Fragment>
          <div className='container'>
            <Routes>
              <Route path="/" element={ <Home/>}/>
              <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
              <Route path="*" element={<PageNotFound/>}/>
            </Routes>
          </div>
          <React.Fragment>
            <Footer/>
          </React.Fragment>
      </Router>

    </div>
  );
}

export default App;
