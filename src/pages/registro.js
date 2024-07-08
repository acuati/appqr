import React, { useState } from 'react';
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css"
import CollapseRegistrarse from '../components/collapseregistrarse';
import CollapseRedes from '../components/collapseredes';
import CollapseAdvertencias from '../components/collapseadvertencias';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [delegation, setDelegation] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault(); // Previene la recarga de la página
    setError('');
    setSuccessMessage('');

    if (email !== confirmEmail) {
      setError('Los correos electrónicos no coinciden.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    try {
      const peticion = await fetch('http://localhost/api-qr-tandem/v1/register-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, delegation, email, password })
      });

      const respuesta = await peticion.json();
      console.log(respuesta);

      if (respuesta.message === 'Registro exitoso') {
        setSuccessMessage('Registro exitoso para el usuario con id:' + respuesta.user.id);
        localStorage.setItem('tndm_id', respuesta.user.id);
        localStorage.setItem('tndm_email', respuesta.user.email);
        localStorage.setItem('tndm_role', respuesta.user.role);
        window.location.href='/registro'
        
        // Redirigir o mostrar mensaje de éxito
      } else {
        setError('Complete todos los campos requeridos');
      }
    } catch (error) {
      console.error('Error en el registro', error);
      setError('Error en el registro');
    }
  };

  return (
    <Layout>
      <h2>Registro de usuarios</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
        </div>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          />
        </div>
        <div>
          <label htmlFor="delegation">Delegación:</label>
        </div>
        <div>
          <input
            type="text"
            id="delegation"
            name="delegation"
            value={delegation}
            onChange={(e) => setDelegation(e.target.value)}
            
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
        <div>
          <label htmlFor="confirmEmail">Confirmar email:</label>
        </div>
        <div>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
           
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar contraseña:</label>
        </div>
        <div>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

        <div>
          <button type="submit">REGISTRAR</button>
        </div>

        <Link to="/login">Volver al login</Link>
      </form>
    </Layout>
  );
};

export const Head = () => <Seo title="Patrimonio Nacional" />

export default Registro;


// import React, { useState } from 'react';
// import { Link, navigate } from "gatsby";
// import Layout from "../components/layout";
// import Seo from "../components/seo";

// const Registro = () => {
//   const [username, setUsername] = useState('');
//   const [delegation, setDelegation] = useState('');
//   const [email, setEmail] = useState('');
//   const [confirmEmail, setConfirmEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = async (event) => {
//     event.preventDefault();

//     if (email !== confirmEmail) {
//       setError('Emails do not match');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     const response = await fetch('/api/register.php', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, delegation, email, password }),
//     });

//     const data = await response.json();

//     if (data.success) {
//       navigate('/login');
//     } else {
//       setError(data.message);
//     }
//   };

//   return (
//     <Layout>
//       <h2>Registro de usuarios</h2>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label htmlFor="username">* Nombre de usuario:</label>
//         </div>
//         <div>
//           <input 
//             type="text" 
//             id="username" 
//             name="username" 
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required 
//           />
//         </div>
//         <div>
//           <label htmlFor="delegation">* Delegación:</label>
//         </div>
//         <div>
//           <input 
//             type="text" 
//             id="delegation" 
//             name="delegation"
//             value={delegation}
//             onChange={(e) => setDelegation(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label htmlFor="email">* Email:</label>
//         </div>
//         <div>
//           <input 
//             type="email" 
//             id="email" 
//             name="email" 
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmEmail">* Confirmar email:</label>
//         </div>
//         <div>
//           <input 
//             type="email" 
//             id="confirmEmail" 
//             name="confirmEmail"
//             value={confirmEmail}
//             onChange={(e) => setConfirmEmail(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label htmlFor="password">* Contraseña:</label>
//         </div>
//         <div>
//           <input 
//             type="password" 
//             id="password" 
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">* Confirmar contraseña:</label>
//         </div>
//         <div>
//           <input 
//             type="password" 
//             id="confirmPassword" 
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)} 
//             required 
//           />
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">REGISTRAR</button>
//       </form>
//       <Link to="/login">Volver al login</Link>
//     </Layout>
//   );
// };

// export const Head = () => <Seo title="Patrimonio Nacional" />

// export default Registro;


// import React from 'react';

// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
// import CollapseRedes from '../components/collapseredes';
// import ButtonAcceso from '../components/buttonacceso';
// import ButtonSegacess from '../components/buttonsegacess';
// const Registro = () => (
//   <Layout>
   
//    <h2>Registro de usuarios</h2>

//    <form>
//     <div>
//     <label htmlFor="username">* Nombre de usuario:</label>
//     </div>
//     <div>
//     <input type="username" id="username" name="username" required/>
//     </div>
//     <div>
//     <label htmlFor="username">* Delegación:</label>
//     </div>
//     <div>
//     <input type="username" id="username" name="username" required />
//     </div>
//     <div>
//     <label htmlFor="email">* Email:</label>
//     </div>
//     <div>
//     <input type="email" id="username" name="username" required />
//     </div>
//     <div>
//     <label htmlFor="email">* Confirmar email:</label>
//     </div>
//     <div>
//     <input type="email" id="username" name="username" required />
//     </div>
//     <div>
//     <label htmlFor="password">* Contraseña:</label>
//     </div>
//     <div>
//     <input type="password" id="username" name="username" required />
//     </div>
//     <div>
//     <label htmlFor="password">* Confirmar contraseña:</label>
//     </div>
//     <div>
//     <input type="password" id="username" name="username" required />
//     </div>
//     <button>REGISTRAR</button>

//    </form>
        
         
        
         

          
        



    

//     <Link to="/login">Volver al login</Link>


//   </Layout>
// )
  




// export const Head = () => <Seo title="Patrimonio Nacional" />

// export default Registro