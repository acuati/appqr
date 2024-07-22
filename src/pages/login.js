import React, { useState } from 'react';
import { FaHome, FaInfoCircle} from "react-icons/fa";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Seo from "../components/seo";
import CollapseLogin from '../components/collapselogin';
import CollapseRedes from '../components/collapseredes';
import CollapseAdvertencias from '../components/collapseadvertencias';
import CardColumns from '../components/cardcolumns';
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
  
  };

  return (

<Layout>
<a href="/"><FaHome />Inicio </a>
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
<div>
{/* <Link to='/registro'>Registrarse</Link> */}
</div>

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
<div>
{/* <Link to='/registro'>Registrarse</Link> */}
</div>
{/* <p>* Si se acaba de registrar en nuestra aplicación, por defecto se le ha asignado este ROL de GUEST </p> */}

</div>

        </div>

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