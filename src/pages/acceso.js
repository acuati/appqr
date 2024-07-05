import React from 'react';

import CerrarSesion from '../components/cerrarsesion';

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
import Perfil from '../components/perfil';
import UploadUserImage from '../components/uploaduserimage';

const Acceso = () => (
  <Layout>
    <Perfil
          email={ localStorage.getItem('tndm_email')}
          id={localStorage.getItem('tndm_id')}
          role ={localStorage.getItem('tndm_role')}
    />
    <UploadUserImage idUser={localStorage.getItem('tndm_id')}></UploadUserImage>

   
    <CollapseAccesos></CollapseAccesos>
    {/* {/* <StaticImage
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
    <CerrarSesion></CerrarSesion> */}
    
    
   
   
   

      
  


      
    
  
  



       
  

  
 
  
  
  
        
 

  </Layout>
  
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Acceso

