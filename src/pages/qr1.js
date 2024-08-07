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
// import CardQr from '../components/cardqr';

const Qr1 = () => (
  <Layout>
    
    {/* <CerrarSesion></CerrarSesion> */}
    {/* <StaticImage
        src="../images/Qr-ejemplo.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ 
          // marginBottom: `var(--space-3)`,
          // marginLeft: `20rem`,
          // marginRight: '20rem' 
        }}
      /> */}
   




    


    
      
  
        
  
  <Link to="/listado">Volver a atrás</Link>
  
  <StaticImage
        src="../images/qr-color-palaciodearanjuez.png"
        loading="eager"
        height={100}
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ 
          // marginBottom: `var(--space-3)`,
          // marginRight: `10rem`,
          marginLeft: `13rem`,
          marginTop: `1rem`
          // marginRight: '20rem' 
        }}
      />

    {/* <CardQr></CardQr> */}
  
 

 

  </Layout>
  
  
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Qr1
