import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

import { UserContext } from './context/userContext';
import AuthLayout from './layouts/AuthLayout';
import PrivateLayout from './layouts/PrivateLayout';

import Inicio from './pages/Inicio';
import Index from './pages';
import Login from './pages/auth/Login';
import Registro from './pages/auth/Registro';
import ListarUsuarios from './pages/usuarios/pagesUsuarios';
import EditarUsuario from './pages/usuarios/editarUsuarios';
import ListarBlogs from './pages/blogs/pageBlogs';

import blogTesting from './pages/blogs/blogTesting';

import './styles/global.css';
import './styles/tabla.css';

const client = new ApolloClient({
uri: 'http://localhost:4000/graphql',
cache: new InMemoryCache(),
})

function App() {
  const [userData, setUserData] = useState({});

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>

          <Route path='' element={<Inicio />} /> 

          <Route path='/login' element={<AuthLayout />}>
              <Route path='/login' element={<Login />} />
              <Route path='/login/registro' element={<Registro />} /> 
            </Route>

            <Route path='/index' element={<Index />} />            
            <Route path='/testing' element={<blogTesting/> }/>
            

            <Route path='/' element={<PrivateLayout />}>              
              <Route path='/usuarios' element={<ListarUsuarios />} />
              <Route path='/usuarios/editar/:_id' element={<EditarUsuario />} />
              <Route path='/lista-blogs' element={<ListarBlogs />} />               
            </Route>
            
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
