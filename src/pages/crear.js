import React, { useState } from 'react';
import { FaHome, FaInfoCircle} from "react-icons/fa";
import CerrarSesion from '../components/cerrarsesion';
import QRCode from 'qrcode.react';

import {QRCodeSVG} from 'qrcode.react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import CollapseRedes from '../components/collapseredes';
import CollapseAdvertencias from '../components/collapseadvertencias';
import Perfil from '../components/perfil';
import UploadUserImage from '../components/uploaduserimage';
import CardStylo from '../components/Card-Stylo';
const Crear = () => {
    const [inputData, setInputData] = useState('');
    const [qrCodeSize, setQRCodeSize] = useState(256); // Default QR code size
    const [qrCodeColor, setQRCodeColor] = useState('#000000'); // Default QR code color
    const [showQRCode, setShowQRCode] = useState(false); // Flag to control QR display
  
    const handleInputChange = (event) => {
      setInputData(event.target.value);
    };
  
    const handleSizeChange = (event) => {
      const newSize = parseInt(event.target.value, 10);
      if (isNaN(newSize) || newSize < 1 || newSize > 1024) {
        alert('Please enter a valid size between 1 and 1024.');
        return; // Prevent invalid size from being set
      }
      setQRCodeSize(newSize);
    };
  
    const handleColorChange = (event) => {
      setQRCodeColor(event.target.value);
    };
  
    const generateQRCode = (event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      if (!inputData) {
        alert('Please enter data to generate the QR code.');
        return;
      }
  
      setShowQRCode(true); // Show QR code after successful generation
    };
  
    return (
      <Layout>
        <Seo title="Patrimonio Nacional" />
        {/* <a href="/"><FaHome />Inicio </a> */}
    
        
        <CerrarSesion></CerrarSesion>

        <CardStylo
     titulo="Bienvenid@"
    //  descripcion="Esto es el contenido del la card"
     url="https://upload.wikimedia.org/wikipedia/commons/4/49/Palacio_Real_de_Aranjuez_%285%29.jpg"
     destacado= 'destacado'

     
  
     >
    </CardStylo>
    
     <CardStylo
    //  titulo="Esta es tu página de perfil como usuario de esta app"
     titulo="Usuari@"
    //  descripcion="Esto es el contenido del la card"
     url="https://upload.wikimedia.org/wikipedia/commons/4/49/Palacio_Real_de_Aranjuez_%285%29.jpg"
     >
     </CardStylo>
     {/* <Perfil
          email={ localStorage.getItem('tndm_email')}
          id={localStorage.getItem('tndm_id')}
          role ={localStorage.getItem('tndm_role')}
    />
    <UploadUserImage idUser={localStorage.getItem('tndm_id')}></UploadUserImage> */}
        <form onSubmit={generateQRCode}>
          <div>
          <label htmlFor="inputData">
           * Introduce texto ó URL del QR: 
          </label>
          <div>
          <input
            type="text"
            id="inputData"
            placeholder="Introduce texto, URL, etc."
            value={inputData}
            onChange={handleInputChange}
            required
          />
          </div>
          </div>
          <div>
          <label htmlFor="qrCodeSize">
            Seleccione el tamaño del QR (1-1024):
          </label>
          </div>
          <div>
          <input
            type="number"
            id="qrCodeSize"
            placeholder="Selecciona el tamaño"
            value={qrCodeSize}
            onChange={handleSizeChange}
            min={1}
            max={1024}
          />
          </div>
          <div>
          <label htmlFor="qrCodeColor">
            Seleccione el color del QR:
          </label>
          </div>
          <div>
          <input
            type="color"
            id="qrCodeColor"
            value={qrCodeColor}
            onChange={handleColorChange}
          />
          </div>
  
          <button type="submit">Crear & Previsualizar QR</button>
        </form>

        
  
        {showQRCode && (
          <div id="qrCodeContainer">
            {/* <p>* Las creaciones en esta app se guardan automáticamente con un logo de patrimonio nacional en su interior y conservando sus datos seleccionados en la página de listado. </p> */}
            <p>Aquí tiene la previsualización de su QR, que se ha creado correctamente para:</p>
            <h1>{inputData}</h1>
            <QRCode
              value={inputData}
              size={qrCodeSize} // Use state variable for dynamic size
              bgColor="transparent" // Transparent background for better visibility
              fgColor={qrCodeColor} // Use state variable for dynamic color
            />
            <h2><strong>RECORDATORIO</strong></h2>
            <h2>Almacenamiento lleno de QRS </h2>
            
          </div>
        )}

{/* <Link to="/acceso">Volver a atrás</Link> */}
      </Layout>
    );
  };


// const Crear = () => {
//     const [inputData, setInputData] = useState('');
//     const [qrCodeSize, setQRCodeSize] = useState(256); // Default QR code size
//     const [qrCodeColor, setQRCodeColor] = useState('#000000'); // Default QR code color
//     const [showQRCode, setShowQRCode] = useState(false); // Flag to control QR display
  
//     const handleInputChange = (event) => {
//       setInputData(event.target.value);
//     };
  
//     const handleSizeChange = (event) => {
//       const newSize = parseInt(event.target.value, 10);
//       if (isNaN(newSize) || newSize < 1 || newSize > 1024) {
//         alert('Please enter a valid size between 1 and 1024.');
//         return; // Prevent invalid size from being set
//       }
//       setQRCodeSize(newSize);
//     };
  
//     const handleColorChange = (event) => {
//       setQRCodeColor(event.target.value);
//     };
  
//     const generateQRCode = (event) => {
//       event.preventDefault(); // Prevent default form submission behavior
  
//       if (!inputData) {
//         alert('Please enter data to generate the QR code.');
//         return;
//       }
  
//       setShowQRCode(true); // Show QR code after successful generation
//     };
  
//     return (
//       <Layout>
//         <Seo title="Patrimonio Nacional" />
  
        
  
//         <form onSubmit={generateQRCode}>
//           <label htmlFor="inputData">
//             Introduce texto, URL, etc.:
//           </label>
//           <input
//             type="text"
//             id="inputData"
//             placeholder="Introduce texto, URL, etc."
//             value={inputData}
//             onChange={handleInputChange}
//           />
  
//           <label htmlFor="qrCodeSize">
//             Tamaño del QR (1-1024):
//           </label>
//           <input
//             type="number"
//             id="qrCodeSize"
//             placeholder="Selecciona el tamaño"
//             value={qrCodeSize}
//             onChange={handleSizeChange}
//             min={1}
//             max={1024}
//           />
  
//           <label htmlFor="qrCodeColor">
//             Color del QR:
//           </label>
//           <input
//             type="color"
//             id="qrCodeColor"
//             value={qrCodeColor}
//             onChange={handleColorChange}
//           />
  
//           <button type="submit">Crear QR</button>
//         </form>
  
//         {showQRCode && (
//           <div id="qrCodeContainer">
//             <p>QR Code generado para:</p>
//             <p>{inputData}</p>
//             <QRCode
//               value={inputData}
//               size={qrCodeSize} // Use state variable for dynamic size
//               bgColor="transparent" // Transparent background for better visibility
//               fgColor={qrCodeColor} // Use state variable for dynamic color
//             />
//           </div>
//         )}
//       </Layout>
//     );
//   };


// const Crear = () => {
    
  
    
//     return (
//       <Layout>
        
  
        
  
//         <form>
//           <label >
//             Introduce texto, URL, etc.:
//           </label>
//           <input
//             type="text"
            
            
//           />
  
//           <label>
//             Tamaño del QR (1-1024):
//           </label>
//           <input
//             type="number"
//           />
  
//           <label>
//             Color del QR:
//           </label>
//           <input type="color"/>
  
//           <button type="submit">Crear QR</button>

          
//         </form>

//         <QRCode value="hola"></QRCode>
  
        
//       </Layout>
//     );
//   };

// const Crear = () => (


    
// <Layout>

// <Link to="/">Volver al inicio</Link>


//     <form>
//         <input type= "text" placeholder='Introduce texto, url, etc.'></input>

//         <input type= "color"></input>

//         <input type= "number" placeholder='selecciona el tamaño'></input>
        

        





//     </form>

        

//         <button>Crear QR</button>


       
 
// </Layout>


// )

export const Head = () => <Seo title="Patrimonio Nacional" />

export default Crear

