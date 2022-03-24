import logo from './logo.svg';
import './App';
import './Playlist/Playlist';
import './SearchResults/SearchResults';

class App extends React.Component {
  render(
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
      <!-- Add a SearchBar component -->
        <div className="App-playlist">
      <!-- Add a SearchResults component -->
      <!-- Add a Playlist component -->
        </div>
        </div>
    </div>
  )
}


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
