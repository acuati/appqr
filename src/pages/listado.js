import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TableListado from '../components/tablelistado';
const Listado = () => (
  <Layout>
    <TableListado></TableListado>

    

    
      
  
        
  
  <Link to="/">Volver al inicio</Link>
  
 

 

  </Layout>
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Listado
