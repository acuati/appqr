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

   <form>
    <div>
    <label htmlFor="username">* Nombre de usuario:</label>
    <input type="username" id="username" name="username" required/>
    </div>
    <div>
    <label htmlFor="username">* Delegación:</label>
    <input type="username" id="username" name="username" required />
    </div>
    <div>
    <label htmlFor="email">* Email:</label>
    <input type="email" id="username" name="username" required />
    </div>
    <div>
    <label htmlFor="email">* Confirmar email:</label>
    <input type="email" id="username" name="username" required />
    </div>
    <div>
    <label htmlFor="password">* Contraseña:</label>
    <input type="password" id="username" name="username" required />
    </div>
    <div>
    <label htmlFor="password">* Confirmar contraseña:</label>
    <input type="password" id="username" name="username" required />
    </div>
    <button>REGISTRAR</button>

   </form>
        
         
        
         

          
        



    

    <Link to="/login">Volver al login</Link>


  </Layout>
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Registro