import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { Action,originals,ComedyMovies,Horror,Trending } from './urls';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={Action} title="Action" isSmall/>
      <RowPost url={Trending} title="Trending" isSmall/>
      <RowPost url={ComedyMovies} title="Comedy" isSmall/>
      <RowPost url={Horror} title="Horror" isSmall/>
    </div>
  );
}

export default App;
