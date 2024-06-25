import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import CollapseRedes from '../components/collapseredes';
import CollapseAdvertencias from '../components/collapseadvertencias';
import TableListado from '../components/tablelistado';
// import { StaticImage } from "gatsby-plugin-image"
const Listado = () => (
  <Layout>
    <CollapseRedes></CollapseRedes>
    <StaticImage
        src="../images/Qr-ejemplo.png"
        loading="eager"
        height={100}
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ 
          // marginBottom: `var(--space-3)`,
          // marginLeft: `20rem`,
          // marginRight: '20rem' 
        }}
      />
    <CollapseAdvertencias></CollapseAdvertencias>
    <StaticImage
        src="../images/Qr-ejemplo.png"
        loading="eager"
        height={100}
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ 
          // marginBottom: `var(--space-3)`,
          // marginLeft: `20rem`,
          // marginRight: '20rem' 
        }}
      />
    <Link to="/">Salir</Link>
    <TableListado></TableListado>


    
      
  
        
  
  <Link to="/acceso">Volver a atrás</Link>
  
 

 

  </Layout>
  
  
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Listado
