// import * as React from "react"
import React from "react"
import { BiLogoYoutube } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdContactless } from "react-icons/md";
import { AiFillNotification } from "react-icons/ai";
import { VscMilestone } from "react-icons/vsc";

import { FaHome, FaInfoCircle} from "react-icons/fa";
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >

      <nav>
      <ul>
      
        <li><a href="/"><FaHome />Inicio</a></li>
       
        <li><a href="https://www.patrimonionacional.es/sobre-patrimonio/conoce-nuestra-historia"><FaInfoCircle />NOSOTROS</a></li>
        <li><a href="https://www.patrimonionacional.es/contacto"><MdContactless />CONTACTO</a></li>
        <li><a href="https://www.patrimonionacional.es/actualidad/noticias-destacadas"><AiFillNotification />NOTICIAS</a></li>
        <li><a href="https://tickets.patrimonionacional.es/es"><VscMilestone />VISITA</a></li>
      </ul>
      
        
      
   
    </nav>
    
   
    <nav>
      
      
     
       
      <a href="https://www.youtube.com/channel/UC1aAN4rDbKBeFmwKMBc_2dA"><BiLogoYoutube /></a>
      <a href=" https://es.linkedin.com/company/patrimonionacional"><FaLinkedin /></a>
      <a href="https://x.com/PatrimNacional"><FaSquareXTwitter /></a>
     
     
      
        
      
   
    </nav>
    <Link
      to="https://www.patrimonionacional.es/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
   

    {/* <img
      alt="corona patrimonio"
      height={20}
      style={{ margin: 0 }}
      src="../images/Captura de pantalla 2024-05-21 113808.png"
    /> */}
  </header>
)

export default Header
