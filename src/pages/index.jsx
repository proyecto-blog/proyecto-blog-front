import React from 'react';
import { Link } from 'react-router-dom';
import Programming from '../media/programming.jpg';
import Python from '../media/python.png';
import ImReact from '../media/react.jpg';
import Mean from '../media/mean.jpg';
import CardBlog from '../components/CardBlog';
import Footer from '../components/footer';
import Header from '../components/header';

const Index = () => {
  return (
    <div>
      <Header />
    <section >
        <h1 className='t_Inicio'>Grupo Konecta</h1>
        <br></br>
      <ul className='catalogoContenedor'>   
          <CardBlog nombreBlog='Testing' imagen={Programming}>
            <button className='botonGenerico mainButton'>
            <Link to='/testing'>hola</Link>   
          </button>
          </CardBlog>
          <CardBlog nombreBlog='Python' imagen={Python} />
          <CardBlog nombreBlog='React' imagen={ImReact} />
          <CardBlog nombreBlog= 'Stack MERN' imagen= {Mean} />         
      </ul>
     </section>
        <Footer/>
    </div>
  );
};

export default Index;


