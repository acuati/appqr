import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import CollapseRedes from '../components/collapseredes';
import ButtonAcceso from '../components/buttonacceso';
import ButtonSegacess from '../components/buttonsegacess';
const Login = () => (
  <Layout>

    <form>
      <label>
        Nombre de usuario
        <input type='text'></input>
      </label>
      <label>
        Credenciales de acceso
        <input type='password'></input>
      </label>
      <Link to="/acceso">ACCEDER</Link>
      
    </form>
   
    <form>
      <Link to="/registro">Registrarse</Link>
    </form>

    
    <form>
    <Link to="/">Volver al inicio</Link>
    </form>

   
      
 
  
 

 

  </Layout>
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Login