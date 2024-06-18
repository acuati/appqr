import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CollapseRedes from '../components/collapseredes';
import ButtonAcceso from '../components/buttonacceso';
import ButtonSegacess from '../components/buttonsegacess';
const Registro = () => (
  <Layout>
   
    <div className="">
        <form className="login-form">
          <h2>Registro de usuarios</h2>

        
          <label htmlFor="username">Nombre:</label>
          <div>
          <input type="text" id="username" name="username" required />
          </div>

          <label htmlFor="username">Delegación:</label>
          
          <div>
          <input type="text" id="username" name="username" required />
          </div>
          
          <label htmlFor="username">Correo electrónico:</label>
          <div>
          <input type="email" id="username" name="username" required />
          </div>
          

         
          <label htmlFor="username">Confirmar correo electrónico:</label>
          
          <div>
          <input type="email" id="username" name="username" required />
          </div>

          <label htmlFor="username">Contraseña:</label>
          <div>
          <input type="password" id="username" name="username" required />
          </div>

          <label htmlFor="username">Confirmar contraseña:</label>
          <div>
          <input type="password" id="username" name="username" required />
          </div>

          <button type="submit">Ingresar</button>
        </form>



    </div>

    <Link to="/login">Volver al login</Link>


  </Layout>
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Registro