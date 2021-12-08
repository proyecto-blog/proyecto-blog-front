import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';


function NuevoBlog() {
  return (
    <>
    <Header nombreBoton='Regresar' enlace='/index'/>
    <div className="form">
      <div className="form-toggle"></div>
      <div lass="form-panel one">
        <div className="form-header">
          <h2>Nuevo Blog</h2>
          <br></br>
          <h3>Ingrese los datos para crear un nuevo blog</h3>
        </div>
        <div className="form-content">
        <form className='form-second'>

            <div className="form-group">
              <label for="titulo">Titulo</label>
              <input type="titulo" id="titulo" name="titulo" required="required" />
            </div>

            <div className="form-group">
              <label for="descripcion">Descripción corta</label>
              <input type="descripcion" id="descripcion" name="descripcion" required="required" />
            </div>
              
            <div className="form-group">
              <label for="contenido">Contenido</label>
              <input type="contenido" id="contenido" name="contenido" required="required" />
            </div>

            <div className="form-group">
              <label for="categoria">Categoria</label>
            </div>

            <div className="categoria">
              <select name="categoria">
                <option selected value="0">Elige una opción</option>
                <option value="1">Desarrollo front-end</option>
                <option value="1">Desarrollo back-end</option>
                <option value="1">Desarrollo full-stack</option>
                <option value="1">Machine Learning</option>
                <option value="1">Metodologías ágiles</option>
                <option value="1">Otros</option>
              </select>
            </div>

            <br></br>

            <div className="form-group">
              <button type="submit" onClick={event => alert(event.target.id)}>
              <p  id="Blog Creado Exitosamente">Guardar información</p>
              </button>
            </div>

          </form>
        </div>
      </div>
      </div>
      <Footer/>
    </>
    
  );
}

export default NuevoBlog;