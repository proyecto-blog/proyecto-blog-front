import React from "react";

function CardBlog({ nombreBlog, imagen }) {
  return (
    <li className='catalogo'>
      <div className='contenedorImagen'>
        <img src={imagen} alt={nombreBlog} />
      </div>
      <span className='tituloImagen'>{nombreBlog}</span>
    </li>
  );
}

export default CardBlog;