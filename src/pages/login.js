import React, { useState } from 'react';
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Seo from "../components/seo";
import CollapseLogin from '../components/collapselogin';
import CollapseRedes from '../components/collapseredes';
import CollapseAdvertencias from '../components/collapseadvertencias';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      navigate('/acceso');
    } else {
      setError(data.message);
    }
  };

  return (
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
      <CollapseAdvertencias></CollapseAdvertencias>
      <form onSubmit={handleLogin}>
        <label>
          * Nombre de usuario
          <div></div>
          <input 
            type='text' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </label>
        <div>
          <label>
            * Credenciales de acceso
            <div></div>
            <input 
              type='password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
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

<Link to="/registro">Registrarse</Link>

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

          <CollapseLogin></CollapseLogin>


        
        
      </form>
     
        
   
        <Link to="/">Volver al inicio</Link>
       
      
    </Layout>
  );
};

export const Head = () => <Seo title="Patrimonio Nacional" />

export default Login;


// import React from 'react';

// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
// import CollapseRedes from '../components/collapseredes';
// import ButtonAcceso from '../components/buttonacceso';
// import ButtonSegacess from '../components/buttonsegacess';
// const Login = () => (
//   <Layout>

//     <form>
//       <label>
//         Nombre de usuario
//         <div></div>
//         <input type='text'></input>
        
        
//       </label>
//       <div>
//       <label>
//         Credenciales de acceso
//         <div></div>
//         <input type='password'></input>
        
       
//       </label>
//       </div>
     
//       <Link to="/acceso">ACCEDER</Link>
      
      
//     </form>
   
//     <form>
//       <Link to="/registro">Registrarse</Link>
//     </form>

    
//     <form>
//     <Link to="/">Volver al inicio</Link>
//     </form>

   
      
 
  
 

 

//   </Layout>
// )
  




// export const Head = () => <Seo title="Patrimonio Nacional" />

// export default Login