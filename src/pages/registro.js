import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import CollapseRedes from '../components/collapseredes';
import ButtonAcceso from '../components/buttonacceso';
import ButtonSegacess from '../components/buttonsegacess';
const Registro = () => (
  <Layout>
   
   <h2>Registro de usuarios</h2>
        <form className="login-form">
          <label htmlFor="username">* Nombre:</label>
         
          <input type="text" id="username" name="username" required />
          
        </form>
        <form className="login-form">
        <label htmlFor="username">*  Delegación:</label>
       
        <input type="text" id="username" name="username" required />
        
        </form>
        <form className="login-form">
        <label htmlFor="username">* Correo electrónico:</label>
      
          
          <input type="email" id="username" name="username" required />
        
        </form>
        <form className="login-form">
        <label htmlFor="username">* Confirmar correo electrónico:</label>
        
          
          <input type="email" id="username" name="username" required />
        
        </form>
        <form className="login-form">
        <label htmlFor="username">* Contraseña:</label>
        
        <input type="password" id="username" name="username" required />
        
        </form>
        <form className="login-form">
          
        <label htmlFor="username">* Confirmar contraseña:</label>
        
          
          <input type="password" id="username" name="username" required />
       
        <button type="submit">Ingresar</button>
        </form>
         

          
        



    

    <Link to="/login">Volver al login</Link>


  </Layout>
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Registro