import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import TableListado from '../components/tablelistado';
// import { StaticImage } from "gatsby-plugin-image"
const Listado = () => (
  <Layout>
    <TableListado></TableListado>


    
      
  
        
  
  <Link to="/acceso">Volver a atrás</Link>
  
 

 

  </Layout>
  
  
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Listado
