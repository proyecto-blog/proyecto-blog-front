import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';
import Login from './pages/auth/Login';
import Registro from './pages/auth/Registro';
import AuthLayout from './layouts/AuthLayout';
import PrivateLayout from './layouts/PrivateLayout';
import IndexUsuarios from './pages/usuarios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Index/>} />

        {/*<Route path='/' element={<AuthLayout/>} > */}
          <Route path='/login' element={<Login/>} />
          <Route path='/login/registro' element={<Registro/>}/>
        {/*</Route>*/}

        <Route path='/' element={<PrivateLayout />}>
          <Route path='/usuarios' element={<IndexUsuarios />} />              
        </Route>


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
