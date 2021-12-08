import React from 'react';
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
      <Header nombreBoton='Crear blog' enlace='/nuevoBlog' nombreAdmin='Admin' enlaceAdmin='/usuarios' />
    <section >
        <h1 className='t_Inicio'>Grupo Konecta</h1>
        <br></br>
      <ul className='catalogoContenedor'>   
          <CardBlog nombreBlog='Testing' imagen={Programming} enlace='/testing'/>
          <CardBlog nombreBlog='Python' imagen={Python} enlace='/python' />
          <CardBlog nombreBlog='React' imagen={ImReact} enlace='/react'/>
          <CardBlog nombreBlog= 'Stack MERN' imagen= {Mean} enlace='/mern' />         
      </ul>
     </section>
        <Footer/>
    </div>
  );
};

export default Index;


