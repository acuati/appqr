import React from 'react';
import CerrarSesion from '../components/cerrarsesion';
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
     {/* <StaticImage
        src="../images/flecha.png"
        loading="eager"
        width={30}
        height={30}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Patrimonio Nacional"
        className={styles.logo}
      />
       <StaticImage
        src="../images/flecha2.png"
        loading="eager"
        width={30}
        height={30}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Patrimonio Nacional"
        className={styles.logo}
      /> */}
   
   
   <CerrarSesion></CerrarSesion>
    
    <TableListado></TableListado>


    
      
  
        
    {/* <StaticImage
        src="../images/flecha.png"
        loading="eager"
        width={30}
        height={30}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Patrimonio Nacional"
        className={styles.logo}
      /> */}

  <Link to="/acceso"> Volver a atrás </Link>
  {/* <StaticImage
        src="../images/flecha2.png"
        loading="eager"
        width={30}
        height={30}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Patrimonio Nacional"
        className={styles.logo}
      /> */}
  
 

 

  </Layout>
  
  
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Listado
