import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CollapseRedes from '../components/collapseredes';

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

    
      
  
        
  
  <Link to="/">Volver al inicio</Link>
  </Layout>
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Acceso

