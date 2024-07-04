import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import CollapseRedes from '../components/collapseredes';
import CollapseAdvertencias from '../components/collapseadvertencias';
import CollapseAccesos from '../components/collapseaccesos';
import ButtonAcceso from '../components/buttonacceso';
import ButtonSegacess from '../components/buttonsegacess';
import ButonAccesibilidad from '../components/butonaccesibilidad';
import ButonAviso from '../components/butonaviso';
import ButonPolitica from '../components/butonpolitica';
const Acceso = () => (
  <Layout>
   <Link to="/login">Salir</Link>
   <br>

   </br>
   <br></br>
    <CollapseAccesos></CollapseAccesos>
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
      />
    
    <StaticImage
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
   
   

      
  


      
    
  
  



       
  

  
 
  
  
  
        
 

  </Layout>
  
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Acceso

