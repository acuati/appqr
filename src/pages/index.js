import React, { useState, useEffect } from "react";  // Aquí se añade useEffect
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import MiMapa from "../components/mimapa"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import CollapseInformacion from "../components/collapseinformacion"
const moreLinks = [
  // { text: "Aviso legal", url: "https://www.patrimonionacional.es/aviso-legal" },
  // { text: "Accesibilidad", url: "https://www.patrimonionacional.es/accesibilidad" },
  // { text: "Política de Privacidad", url: "https://www.patrimonionacional.es/politica-de-privacidad" },
  // { text: "NOSOTROS", url: "https://www.patrimonionacional.es/sobre-patrimonio/conoce-nuestra-historia" },
  // { text: "NOTICIAS", url: "https://www.patrimonionacional.es/actualidad/noticias-destacadas" },
  // { text: "CONTACTO", url: "https://www.patrimonionacional.es/contacto" },
  // { text: "VISITA", url: "https://tickets.patrimonionacional.es/es" },
]
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`
const IndexPage = () => {
  const [latLng, setLatLng] = useState(null);
  return (
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
      <Link to="/crear" className={styles.loginLink}>GENERAR</Link>
      <StaticImage
        src="../images/patrimonionacional.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Patrimonio Nacional"
        className={styles.logo}
      />
       <h1>GENERADOR</h1>
      <CollapseInformacion />
    </div>
    <h2>LOCALIZADOR</h2>
    <div>
    <MiMapa setLatLng={setLatLng} />
    <div className="coordinates">
    {latLng ? (
    <p>
      Latitud: {latLng.lat}, Longitud: {latLng.lng}
    </p>
    ) : (
    <p>Haz clic en el mapa para obtener las coordenadas</p>
    )}
    </div>
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
}
export const Head = () => <Seo title="Patrimonio Nacional" />
export default IndexPage