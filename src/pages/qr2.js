import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import TableListado from '../components/tablelistado';
// import CardQr from '../components/cardqr';

const Qr2 = () => (
  <Layout>
   




    


    
      
  
        
  
  <Link to="/listado">Volver a atrás</Link>
  <StaticImage
        src="../images/qr-color-jardin-del-principe.png"
        loading="eager"
        height={500}
        width={515}
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

export default Qr2
