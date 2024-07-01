import * as React from "react"
import { BiLogoYoutube } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdContactless } from "react-icons/md";
import { AiFillNotification } from "react-icons/ai";
import { VscMilestone } from "react-icons/vsc";

import { FaHome, FaInfoCircle} from "react-icons/fa";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import CollapseInformacion from "../components/collapseinformacion"
import CollapseRedes from "../components/collapseredes"
import ButonContacto from "../components/butoncontacto"
import ButonNosotros from "../components/butonnosotros"
import ButonNoticias from "../components/butonnoticias"
import ButonVisita from "../components/butonvisita"






// const samplePageLinks = [
//   { 
//     text: "Patrimonio Nacional", 
//     url: "https://www.patrimonionacional.es/" ,
//   },
// ]

const moreLinks = [
  { text: "Aviso legal", url: "https://www.patrimonionacional.es/aviso-legal" },
  { text: "Accesibilidad", url: "https://www.patrimonionacional.es/accesibilidad" },
  { text: "Política de Privacidad", url: "https://www.patrimonionacional.es/politica-de-privacidad" },

  // { text: "NOSOTROS", url: "https://www.patrimonionacional.es/sobre-patrimonio/conoce-nuestra-historia" },
  // { text: "NOTICIAS", url: "https://www.patrimonionacional.es/actualidad/noticias-destacadas" },
  // { text: "CONTACTO", url: "https://www.patrimonionacional.es/contacto" },
  // { text: "VISITA", url: "https://tickets.patrimonionacional.es/es" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  
  <Layout>
    

    <div className={styles.header}>
      
      <StaticImage
        src="../images/patrimonionacional.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Patrimonio Nacional"
        className={styles.logo}
      />
      <Link to="/login" className={styles.loginLink}>LOGIN</Link>
      <StaticImage
        src="../images/patrimonionacional.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Patrimonio Nacional"
        className={styles.logo}
      />
      <CollapseInformacion />
    
     {/* GENERADOR DE QRS  */}
    
      <h1>GENERADOR
     
      {/* <StaticImage
        src="../images/flecha.png"
        loading="eager"
        width={30}
        height={30}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Patrimonio Nacional"
        className={styles.logo}
      /> */}

      

      </h1>
      {/* <h1 className={styles.title}>GENERADOR DE QRS</h1> */}
      {/* <ButonNosotros></ButonNosotros>
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
      />
      <ButonContacto></ButonContacto>
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
      />
      <StaticImage
        src="../images/flecha.png"
        loading="eager"
        width={30}
        height={30}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Patrimonio Nacional"
        className={styles.logo}
      />
      <ButonNoticias></ButonNoticias>
      
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
      />
      
     
    
     
    </div>
    

    
    <div className={styles.links}>
    <ButonVisita></ButonVisita> */}
    
     
      {/* {samplePageLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={link.url} className={styles.sampleLink}>{link.text}</a>
          {i !== samplePageLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))} */}
      
     
      {/* <StaticImage
        src="../images/flecha.png"
        loading="eager"
        width={30}
        height={30}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Patrimonio Nacional"
        className={styles.logo}
      /> */}
      
      
       
    </div>

    

  
    
    
    <div className={styles.imageGallery}>
      
      <p>

      <StaticImage
        src="../images/Captura de pantalla 2024-05-21 113808.png"
        loading="eager"
        height={90}
        width={95}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Captura"
        className={styles.image}
      />
      <StaticImage
        src="../images/gobiernoespaña.png"
        loading="eager"
        height={50}
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Gobierno España"
        className={styles.image}
      />
      <StaticImage
        src="../images/tandem.png"
        loading="eager"
        height={90}
        width={125}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Tandem"
        className={styles.image}
      />
     
      
    
      </p>
      {/* <StaticImage
        src="../images/flecha.png"
        loading="eager"
        width={30}
        height={30}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Patrimonio Nacional"
        className={styles.logo}
      /> */}
      
     
      <StaticImage
        src="../images/thumbnail_CABECERA TANDEM.png"
        loading="eager"
        height={70}
        width={780}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Cabecera Tandem"
        className={styles.headerImage}
        
      />
      
      
      
      
    </div>

    <div className={styles.moreLinks}>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`} className={styles.moreLink}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Patrimonio Nacional" />

export default IndexPage

// import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"



// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
// // import ModalBtnAcceso from "../components/modalbtnacceso"
// import CollapseInformacion from "../components/collapseinformacion"
// import CollapseRedes from "../components/collapseredes"
// import Acceso from "./acceso"






// const samplePageLinks = [
//   // {
//   //   text: "Información",
//   //   url: "page-2",
//   //   badge: false,
//   //   description:
//   //     "En esta página se encuentra tanto la información institucional de Patrimonio Nacional; como la información al público",
//   // },
//   { 
//     text: "Patrimonio Nacional", 
//     url: "https://www.patrimonionacional.es/" ,
   
//   },
  
//   // { text: "NOSOTROS", url: "https://www.patrimonionacional.es/sobre-patrimonio/conoce-nuestra-historia" },
//   // { text: "NOTICIAS", url: "https://www.patrimonionacional.es/actualidad/noticias-destacadas" },
//   // { text: "CONTACTO", url: "https://www.patrimonionacional.es/contacto" },
//   // { text: "VISITA", url: "https://tickets.patrimonionacional.es/es" },
//   // { text: "TypeScript", url: "using-typescript" },
//   // { text: "Server Side Rendering", url: "using-ssr" },
//   // { text: "Deferred Static Generation", url: "using-dsg" },
// ]






// const moreLinks = [
  
//   { text: "Aviso legal", url: "https://www.patrimonionacional.es/aviso-legal" },
//   {
//     text: "Accesibilidad",
//     url: "https://www.patrimonionacional.es/accesibilidad",
//   },
  
//   { text: "Política de privacidad", url: "https://www.patrimonionacional.es/politica-de-privacidad" },
//   { text: "NOSOTROS", url: "https://www.patrimonionacional.es/sobre-patrimonio/conoce-nuestra-historia" },
//   { text: "NOTICIAS", url: "https://www.patrimonionacional.es/actualidad/noticias-destacadas" },
//   { text: "CONTACTO", url: "https://www.patrimonionacional.es/contacto" },
//   { text: "VISITA", url: "https://tickets.patrimonionacional.es/es" },
// ]

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

// const IndexPage = () => (
 
  
  
//   <Layout>

    

//     <div className={styles.textCenter}>
//       <StaticImage
//         src="../images/patrimonionacional.png"
//         loading="eager"
//         width={64}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ marginBottom: `var(--space-3)` }}
//       />
//       <h1>
//         GENERADOR DE QRS
//       </h1>

//       <Link to="/login">LOGIN</Link>
//       <CollapseInformacion></CollapseInformacion>
//       {samplePageLinks.map((link, i) => (
//           <React.Fragment key={link.url}>
//             <Link to={link.url}>{link.text}</Link>
//             {i !== samplePageLinks.length - 1 && <> · </>}
//           </React.Fragment>
//         ))}
     
      
      
//       <p className={styles.intro}>
//       <StaticImage
//         src="../images/Captura de pantalla 2024-05-21 113808.png"
//         loading="eager"
//         height={50}
//         width={50}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ 
//           marginBottom: `var(--space-3)`,
//           marginTop: `1rem`,
//           marginRight: `5rem`,
//           marginLeft: `5rem`
          

//          }}
//       />
//       <StaticImage
//         src="../images/gobiernoespaña.png"
//         loading="eager"
//         height={50}
//         width={300}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ 
          
//           marginBottom: `var(--space-3)`,
//           marginTop: '1rem',
//           marginRight: '0rem',
//           marginLeft: '0rem'
          
          
          

//          }}
//       />
//       <StaticImage
//         src="../images/tandem.png"
//         loading="eager"
//         height={30}
//         width={50}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ 
//           marginBottom: `var(--space-3)`,
//           marginTop: `2rem`,
//           marginLeft: `2rem`,
//           marginRight: `3rem`
         
          
//         }}
//       />
       
      
      
//       <StaticImage
//         src="../images/thumbnail_CABECERA TANDEM.png"
//         loading="eager"
//         height={70}
//         width={800}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ 
//           marginTop: `2em`,
//           marginLeft: `0em`,
//           marginBottom: `var(--space-3)`


//          }}
//       />



   
      
//       </p>
//     </div>
//     {/* <ul className={styles.list}>
//       {links.map(link => (
//         <li key={link.url} className={styles.listItem}>
//           <a
//             className={styles.listItemLink}
//             href={`${link.url}${utmParameters}`}
//           >
//             {link.text} ↗
//           </a>
//           <p className={styles.listItemDescription}>{link.description}</p>
//         </li>
//       ))}
//     </ul> */}
//     {moreLinks.map((link, i) => (
//       <React.Fragment key={link.url}>
//         <a href={`${link.url}${utmParameters}`}>{link.text}</a>
//         {i !== moreLinks.length - 1 && <> · </>}
//       </React.Fragment>
//     ))}
//     <br></br>
//     <br></br>
//     <CollapseRedes></CollapseRedes>
    
//   </Layout>
  
  
//   )

// /**
//  * Head export to define metadata for the page
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */
// export const Head = () => <Seo title="Patrimonio Nacional" />

// export default IndexPage
