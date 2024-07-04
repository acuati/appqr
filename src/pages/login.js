import React, { useState } from 'react';
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Seo from "../components/seo";
import CollapseLogin from '../components/collapselogin';
import CollapseRedes from '../components/collapseredes';
import CollapseAdvertencias from '../components/collapseadvertencias';
const Login = () => {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleLogin = async () => {
        try {
            const peticion = await fetch('http://localhost/api-qr-tandem/v1/login-user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const respuesta = await peticion.json();
            console.log(respuesta)
            if (respuesta.message === 'Login exitoso') {
                // Aquí podrías guardar el usuario en el estado global o en localStorage
                setMessage('Login exitoso para el usuario con id:'+ respuesta.user.id);
                localStorage.setItem('tndm_id', respuesta.user.id)
                localStorage.setItem('tndm_email', respuesta.user.email)
                // localStorage.setItem('tndm_img_user', respuesta.user.image_url)
                localStorage.setItem('tndm_role', respuesta.user.role)
                window.location.href='/acceso'
            } else {
                setMessage('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error en el login', error);
            setMessage('Error en el login');
        }
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  // const handleLogin = async (event) => {
  //   event.preventDefault();

  //   const response = await fetch('/api/login.php', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, password }),
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     navigate('/acceso');
  //   } else {
  //     setError(data.message);
  //   }
  };

  return (
//     <Layout>
      
       
     
      

      
//       <form onSubmit={handleLogin}>
      
//         <label>
//           * Nombre de usuario
//           <div></div>
//           <input 
//             type='text' 
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)}
//             required 
//           />
//         </label>
//         <div>
        
//           <label>
//             * Credenciales de acceso
//             <div></div>
//             <input 
//               type='password' 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)}
//               required 
//             />
//           </label>
          
//         </div>
       
//         {error && <p style={{ color: 'red' }}>{error}</p>}
        
//         {/* <StaticImage
//         src="../images/Qr-ejemplo.png"
//         loading="eager"
//         width={64}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ 
//           // marginBottom: `var(--space-3)`,
//           // marginLeft: `20rem`,
//           // marginRight: '20rem' 
//         }}
//       /> */}



// {/* <StaticImage
//         src="../images/Qr-ejemplo.png"
//         loading="eager"
//         width={64}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ 
//           // marginBottom: `var(--space-3)`,
//           // marginLeft: `20rem`,
//           // marginRight: '20rem' 
//         }}
//       /> */}

// <Link to="/registro">Registrarse</Link>
// {/* <StaticImage
//         src="../images/Qr-ejemplo.png"
//         loading="eager"
//         width={64}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ 
//           // marginBottom: `var(--space-3)`,
//           // marginLeft: `20rem`,
//           // marginRight: '20rem' 
//         }}
//       />
//       <StaticImage
//         src="../images/Qr-ejemplo.png"
//         loading="eager"
//         width={64}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ 
//           // marginBottom: `var(--space-3)`,
//           // marginLeft: `20rem`,
//           // marginRight: '20rem' 
//         }}
//       />
//           <CollapseLogin></CollapseLogin> */}

          


        
        
//       </form>
     
        
   
        
       
      
//     </Layout>
<Layout>
<div>
<input
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
<button onClick={handleLogin}>ACCEDER</button>

</div>

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