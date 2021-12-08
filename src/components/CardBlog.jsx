import React from 'react';

function CardBlog({ nombreBlog, imagen, enlace }) {
  return (
    <li className='catalogo'>
      <div className='contenedorImagen'>
        <img src={imagen} alt={nombreBlog} />
      </div>
      <a className='tituloImagen' href={enlace}>{nombreBlog}</a>
    </li>
  );
}

export default CardBlog;