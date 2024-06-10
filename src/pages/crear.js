import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import {QRCodeSVG} from 'qrcode.react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"




const Crear = () => (
  
<Layout>

    

      <QRCode value="hola"></QRCode>

    
    
    
  
  
 
  



  

   


    
  



  

  <br></br>

 <Link to="/">Volver al inicio</Link>
 
</Layout>


)

export const Head = () => <Seo title="Patrimonio Nacional" />

export default Crear

