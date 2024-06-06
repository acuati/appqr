import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Acceso = () => (
  <Layout>
    <StaticImage
        src="../images/Qr-ejemplo.png"
        loading="eager"
        height={303}
        width={303}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ 
          marginBottom: `var(--space-3)`,
          marginLeft: `15rem`, 
        }}
      />
      
  
        <br></br>
  
  <Link to="/">Volver al inicio</Link>
  </Layout>
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Acceso

