import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Index/>} />
      </Routes>
      
    
    </BrowserRouter>

    /*<div className="App">
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
    </div>*/
    
  );
}

export default App;
