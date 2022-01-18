import './App.css';
import CarList from './CarList'
import Searchbar from './Searchbar';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <div>
      <Searchbar/>
      <NavBar/>
      </div>
      <header className="App-header">
        <CarList/>
      </header>
    </div>
  );
}

export default App;

