import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"



import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import ModalBtnAcceso from "../components/modalbtnacceso"
import CollapseInformacion from "../components/collapseinformacion"

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

const samplePageLinks = [
  // {
  //   text: "Información",
  //   url: "page-2",
  //   badge: false,
  //   description:
  //     "En esta página se encuentra tanto la información institucional de Patrimonio Nacional; como la información al público",
  // },
  { 
    text: "Patrimonio Nacional", 
    url: "https://www.patrimonionacional.es/" ,
   
  },
  
  // { text: "NOSOTROS", url: "https://www.patrimonionacional.es/sobre-patrimonio/conoce-nuestra-historia" },
  // { text: "NOTICIAS", url: "https://www.patrimonionacional.es/actualidad/noticias-destacadas" },
  // { text: "CONTACTO", url: "https://www.patrimonionacional.es/contacto" },
  // { text: "VISITA", url: "https://tickets.patrimonionacional.es/es" },
  // { text: "TypeScript", url: "using-typescript" },
  // { text: "Server Side Rendering", url: "using-ssr" },
  // { text: "Deferred Static Generation", url: "using-dsg" },
]






const moreLinks = [
  
  { text: "Aviso legal", url: "https://www.patrimonionacional.es/aviso-legal" },
  {
    text: "Accesibilidad",
    url: "https://www.patrimonionacional.es/accesibilidad",
  },
  
  { text: "Política de privacidad", url: "https://www.patrimonionacional.es/politica-de-privacidad" },
  { text: "NOSOTROS", url: "https://www.patrimonionacional.es/sobre-patrimonio/conoce-nuestra-historia" },
  { text: "NOTICIAS", url: "https://www.patrimonionacional.es/actualidad/noticias-destacadas" },
  { text: "CONTACTO", url: "https://www.patrimonionacional.es/contacto" },
  { text: "VISITA", url: "https://tickets.patrimonionacional.es/es" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
 
  
  
  <Layout>

    <div className={styles.textCenter}>
      <StaticImage
        src="../images/patrimonionacional.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        GENERADOR DE QRS
      </h1>

      <ModalBtnAcceso></ModalBtnAcceso>
      <br></br>
      <br></br>
      <CollapseInformacion></CollapseInformacion>
     

      
      <p className={styles.intro}>
        
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}

        <br></br>
        <br></br>

      <StaticImage
        src="../images/Captura de pantalla 2024-05-21 113808.png"
        loading="eager"
        height={804}
        width={804}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
       <StaticImage
        src="../images/gobiernoespaña.png"
        loading="eager"
        height={50}
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ 
          
          marginBottom: `var(--space-3)`,
          

         }}
      />
      
      {/* <button href="https://www.patrimonionacional.es/sobre-patrimonio/conoce-nuestra-historia">

        NOSOTROS

       
        

      </button> 
      <button href="https://www.patrimonionacional.es/actualidad/noticias-destacadas">
          NOTICIAS
      </button>
      <button href="https://www.patrimonionacional.es/contacto">
          CONTACTO
      </button>
      <button href="https://tickets.patrimonionacional.es/es">
          VISITA
      </button>  */}
      <p><strong>Siguenos en:</strong>
      <br></br>
      <br></br>
      <StaticImage
        src="../images/x.png"
        loading="eager"
        height={20}
        width={20}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
        // url="https://x.com/PatrimNacional"
      />
      <br></br>
      <a href="https://x.com/PatrimNacional">x</a>
      <br></br>
      <br></br>
      <StaticImage
        src="../images/linkedin.png"
        loading="eager"
        height={30}
        width={30}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
        // url="https://es.linkedin.com/company/patrimonionacional"
      />
      
      <a href="https://es.linkedin.com/company/patrimonionacional">linkedin</a>
      <br></br>
      <StaticImage
        src="../images/youtube.png"
        loading="eager"
        height={20}
        width={20}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
        // url="https://www.youtube.com/channel/UC1aAN4rDbKBeFmwKMBc_2dA"
      />
      <a href="https://www.youtube.com/channel/UC1aAN4rDbKBeFmwKMBc_2dA">youtube</a>
      <br></br>
      
      
      
      
      </p>
        {/* <br />
        Edit <code>src/pages/index.js</code> to update this page. */}
      </p>
    </div>
    {/* <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul> */}
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
    <br></br>
    <StaticImage
        src="../images/thumbnail_CABECERA TANDEM.png"
        loading="eager"
        height={50}
        width={800}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ 
          marginTop: `2em`,
          marginBottom: `var(--space-3)`


         }}
      />
     <StaticImage
        src="../images/tandem.png"
        loading="eager"
        height={30}
        width={50}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ 
          marginBottom: `var(--space-3)`,
          marginLeft: `8em`, 
          
        }}
      />
 
    
  </Layout>
  
  
  )

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Patrimonio Nacional" />

export default IndexPage
