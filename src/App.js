import './App.css';
import Header from './components/Header';
import SliderImages from './components/SliderImages';
import SliderImages2 from './components/SliderImages2';
import CardsSlider from './components/CardsSlider';
import Premieres from './components/Premieres';
import Recommendation from './components/Recommendation';
import Happening from './components/Happening';
import Footer from './components/Footer';
//import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
//import SingleMovie from './components/SingleMovie';
import SingleMovieFetch from './components/SingleMovieFetch';
import Registration from './components/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div >
        <Header/>
        <Switch>
          <Route exact path="/">
            <SliderImages/>
            <Recommendation/>
            <CardsSlider/>
            <Premieres/>
            <Happening/>
          </Route>
          <Route exact path="/movies">
            <SliderImages2 />
            <AllMoviesFetch />
          </Route>
          <Route exact path="/movies/:movid">
            <SingleMovieFetch />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
