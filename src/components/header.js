// import * as React from "react"
import React from "react"
import { BiLogoYoutube } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdContactless } from "react-icons/md";
import { AiFillNotification } from "react-icons/ai";
import { VscMilestone } from "react-icons/vsc";

import { FaHome, FaInfoCircle} from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"
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
      
      
       
       
       <a href="https://www.patrimonionacional.es/sobre-patrimonio/conoce-nuestra-historia"><FaInfoCircle />NOSOTROS </a>
        <a href="https://www.patrimonionacional.es/contacto"><MdContactless />CONTACTO </a>
        <a href="https://www.patrimonionacional.es/actualidad/noticias-destacadas"><AiFillNotification />NOTICIAS </a>
        <a href="https://tickets.patrimonionacional.es/es"><VscMilestone />VISITA </a>

      
      
      
      <nav>

        <a href="https://www.patrimonionacional.es/aviso-legal"><CiBookmark />Aviso legal </a>
        <a href="https://www.patrimonionacional.es/accesibilidad"><CiBookmark />Accesibilidad </a>
        <a href="https://www.patrimonionacional.es/politica-de-privacidad"><CiBookmark />Política de Privacidad</a>

      </nav>


      <nav>
      





      <p>
        <StaticImage
  src="../images/gobiernoespaña.png"
  loading="eager"
  height={50}
  width={300}
  quality={95}
  formats={["auto", "webp", "avif"]}
  alt="Gobierno España"
  // className={styles.image}
/>
<StaticImage
  src="../images/Captura de pantalla 2024-05-21 113808.png"
  loading="eager"
  height={55}
  width={60}
  quality={95}
  formats={["auto", "webp", "avif"]}
  alt="Captura"
  // className={styles.image}
/>

<StaticImage
  src="../images/tandem.png"
  loading="eager"
  height={55}
  width={75}
  quality={95}
  formats={["auto", "webp", "avif"]}
  alt="Tandem"
  // className={styles.image}
/>
<Link
      to="https://www.patrimonionacional.es/"
      style={{
        margin: `1em`,
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
</Link>

<a href="https://x.com/PatrimNacional"><FaSquareXTwitter /></a>
<a href="https://www.youtube.com/channel/UC1aAN4rDbKBeFmwKMBc_2dA"><BiLogoYoutube /></a>
<a href=" https://es.linkedin.com/company/patrimonionacional"><FaLinkedin /></a>
        </p>
        <footer
          style={{
            marginTop: `var(--space-2)`,
            fontSize: `var(--font-sm)`,
          }}
        >

          
       

          © Patrimonio Nacional | {new Date().getFullYear()} &middot;
          {` `}

         
          
        </footer>
        

      
        <StaticImage
        src="../images/thumbnail_CABECERA TANDEM.png"
        loading="eager"
        height={75}
        width={880}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Cabecera Tandem"
        // className={styles.headerImage}
        
        /> 



        

      </nav>

      
   



 

   

       
     
      
    </nav>
       
        
        
        
     
     
      
        
      
   
    
   
  
      

  
  
    


    

   


    {/* <nav>
    <a href="https://www.patrimonionacional.es/aviso-legal"><BiLogoYoutube /></a>
     
     
      
        
      
   
    
      
      
     
       
      
     <a href="https://www.patrimonionacional.es/accesibilidad"><FaLinkedin /></a>
    
    
    
     
       
     
  

     
     
    
     
     <a href="https://www.patrimonionacional.es/politica-de-privacidad"><FaSquareXTwitter /></a>
    
    </nav> */}

    

  
  

    {/* <img
      alt="corona patrimonio"
      height={20}
      style={{ margin: 0 }}
      src="../images/Captura de pantalla 2024-05-21 113808.png"
    /> */}
  </header>
)

export default Header
