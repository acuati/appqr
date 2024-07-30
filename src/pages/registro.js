import React, { useState } from 'react';
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import CollapseLogin from '../components/collapselogin';
import CollapseRedes from '../components/collapseredes';
import CollapseAdvertencias from '../components/collapseadvertencias';
import CardColumns from '../components/cardcolumns';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [delegacion, setDelegacion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const apiUrl = process.env.GATSBY_API_URL;

  const handleRegister = async () => {
    if (!nombre || !delegacion || !email || !password) {
      setMessage('Por favor, complete todos los campos.');
      return;
    }

    try {
      const peticion = await fetch('http://localhost/api-qr-tandem/v1/register-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, delegacion, email, password })
      });

      const respuesta = await peticion.json();

      if (respuesta.message === 'Registro exitoso') {
        // Guardar el usuario en el estado global o en localStorage
        localStorage.setItem('tndm_id', respuesta.user.id);
        localStorage.setItem('tndm_email', respuesta.user.email);
        // localStorage.setItem('tndm_img_user', respuesta.user.image_url);
        localStorage.setItem('tndm_role', respuesta.user.role);

        // Mostrar mensaje de registro exitoso
        setMessage('Registro exitoso para el usuario con id: ' + respuesta.user.id);
      } else {
        setMessage(respuesta.message || 'Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro', error);
      setMessage('Error en el registro');
    }
  };

  return (
    <Layout>
      <Seo title="Patrimonio Nacional" />
      <h2>Registro de usuarios</h2>
      <Link to="/login">Volver al login</Link>
      <div>
        <div>Nombre de usuario</div>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <div>Nombre de la delegación</div>
        <input
          type="text"
          value={delegacion}
          onChange={(e) => setDelegacion(e.target.value)}
        />
        <div>Email de usuario</div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>Credenciales de acceso</div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleRegister}>REGISTRAR</button>
      {/* <Link to="/login">Volver al login</Link> */}
      {message && <div>{message}</div>}
    </Layout>
  );
};

export default Registro;

