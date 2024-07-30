import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import MiMapa from "../components/mimapa"
import Seo from "../components/seo"
import CollapseAccesos from '../components/collapseaccesos';
import * as styles from "../components/index.module.css"
import CollapseInformacion from "../components/collapseinformacion"
import CardColumns from "../components/cardcolumns"







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
      <Link to="/login" className={styles.loginLink}>LOGIN</Link>
      {/* <CollapseAccesos></CollapseAccesos> */}
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

    <div className="card-columns">

    <CardColumns></CardColumns>
       
        <div className="card">
          <StaticImage
            src="../images/Captura de pantalla 2024-07-05 123618.png"
            alt="Imagen 1"
            placeholder="blurred"
            layout="fixed"
            width={150}
            height={150}
          />
          <div className="card-body">
            <h5 className="card-title">Gerentes</h5>
            <p className="card-text">Con ROL: ADMIN</p>
          </div>
          <div>
{/* <input
    type="email"
    placeholder="Email de usuario"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>
<input
    type="password"
    placeholder="Credenciales de acceso"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
/>
<button onClick={handleLogin}>ACCEDER</button> */}

</div>
        </div>
        <div>
        {/* <Link to='/registro'>Registrarse</Link> */}
</div>
        <div className="card">
          <StaticImage
            src="../images/Captura de pantalla 2024-07-05 123814.png"
            alt="Imagen 2"
            placeholder="blurred"
            layout="fixed"
            width={150}
            height={150}
          />
          <div className="card-body">
            <h5 className="card-title">Emplead@s</h5>
            <p className="card-text">Con ROL: EMPLOYEE</p>
          </div>
          <div>
{/* <input
    type="email"
    placeholder="Email de usuario"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>
<input
    type="password"
    placeholder="Credenciales de acceso"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
/>
<button onClick={handleLogin}>ACCEDER</button> */}

</div>
<div>
{/* <Link to='/registro'>Registrarse</Link> */}
</div>
        </div>
        <div className="card">
          <StaticImage
            src="../images/859030.png"
            alt="Imagen 3"
            placeholder="blurred"
            layout="fixed"
            width={150}
            height={150}
            
          />
          <div className="card-body">
            <h5 className="card-title">Invitad@s</h5>
            <p className="card-text">Con ROL: GUEST</p>
          </div>
          <div>
{/* <input
    type="email"
    placeholder="Email de usuario"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>
<input
    type="password"
    placeholder="Credenciales de acceso"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
/>

<button onClick={handleLogin}>ACCEDER</button> */}
<div>
{/* <Link to='/registro'>Registrarse</Link> */}
</div>
{/* <p>* Si se acaba de registrar en nuestra aplicación, por defecto se le ha asignado este ROL de GUEST </p> */}

</div>

        </div>

</div>




   
  </Layout>

  )
  
}

export const Head = () => <Seo title="Patrimonio Nacional" />

export default IndexPage