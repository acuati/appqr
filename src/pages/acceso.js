import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import CollapseRedes from '../components/collapseredes';
import ButtonAcceso from '../components/buttonacceso';
import ButtonSegacess from '../components/buttonsegacess';
const Acceso = () => (
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
    

    

    
      
  
        
  
  <Link to="/">Cerrar sesión</Link>
  
 

  <br></br>
  <br></br>
  <ButtonAcceso></ButtonAcceso>
  
  <br></br>
  <br></br>
  <ButtonSegacess></ButtonSegacess>

  
  <br></br>
  <br></br>

  </Layout>
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Acceso

