import React from 'react';
import { Grid } from '@mui/material';
import * as FaIcons from 'react-icons/fa';
import Header from '../components/header';
import Footer from '../components/footer';

const Inicio = () => {
    return (
        <div className='mainContainer'>
            <Header />
            <body>
                <br></br>
                <br></br>
                <h1 className='t_Inicio'> Grupo Konecta </h1>
                <br></br>
                <br></br>
                <br></br>
                <h2 className='t_Subtitulo'>Bienvenido a nuestro blog de programación</h2>
                <h2 className='t_Subtitulo'> Nunca dejes de aprender </h2>
                <br></br>
                <Grid container item xs={12} sm={12} lg={12} direction="column" justify="center" alignItems="center">                    
                    <FaIcons.FaReact />
                    <FaIcons.FaGithub />
                    <FaIcons.FaNodeJs />                    
                    <FaIcons.FaAngular />                    
                    <FaIcons.FaPython/>      
                </Grid>
            </body>
            <Footer />
        </div>
    )
}

export default Inicio
