import React, { useState } from 'react';
import { FaHome, FaInfoCircle} from "react-icons/fa";
import QRCode from 'qrcode.react';
import Layout from "../components/layout"
import Seo from "../components/seo"
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
        <a href="/"><FaHome />Inicio </a>
    
        
       

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
            
            <p>Aquí tiene la previsualización de su QR, que se ha creado correctamente para:</p>
            <h1>{inputData}</h1>
            <QRCode
              value={inputData}
              size={qrCodeSize} // Use state variable for dynamic size
              bgColor="transparent" // Transparent background for better visibility
              fgColor={qrCodeColor} // Use state variable for dynamic color
            />
           
            
          </div>
        )}


      </Layout>
    );
  };




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Crear

