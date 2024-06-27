import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"
function CollapseInformacion(args) {
  const [collapseStates, setCollapseStates] = useState({});

  const toggleCollapse = (id) => {
    setCollapseStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <React.StrictMode>
      <Button color="primary" onClick={() => toggleCollapse('informacion')} style={{ marginBottom: '1rem' }}>
      Información institucional
      </Button>
      <Collapse isOpen={collapseStates['informacion']} {...args}>
        <Card>
          <CardBody>
            
          <p>Bienvenidos a Patrimonio Nacional.</p> <p>Somos una institución histórico-cultural única en el mundo. Cuidamos de más de 1.000 inmuebles, 170.000 piezas artísticas y 18.000 hectáreas de espacios verdes de gran riqueza medioambiental. Y lo hacemos con una doble misión: preservar y dar a conocer este valiosísimo legado y facilitar a la jefatura del Estado la labor representativa que le otorga nuestra Constitución.</p>
          <p>Esta web es una ventana a todo este conjunto de bienes y a las actividades culturales, educativas y científicas que organizamos para su difusión. Una ventana a:</p>
          <p>  <ul>
              <li>Los 19 palacios reales, reales monasterios y casas de campo en seis comunidades autónomas diferentes.</li>
              <li>Los parques naturales como el Monte de El Pardo o el Bosque de Riofrío.</li>
              <li>Los 6.500 cuadros firmados, entre otros, por El Greco, Caravaggio o Velázquez.</li>
              <li> La programación de nuestros conciertos.</li>
              <li>Nuestros talleres.</li>
              <li>Nuestras publicaciones.</li>
              
              
            </ul>   
          </p>  

<p>Dar a conocer Patrimonio Nacional es dar a conocer nuestra historia. Y preservar sus bienes de forma sostenible, consciente y rigurosa es asegurar que las futuras generaciones podrán disfrutar de ellos igual que lo hacemos ahora. Somos conscientes de la importancia de nuestra tarea. Por eso queremos abrir nuestras puertas a toda la ciudadanía y ser un punto de encuentro que sirva de elemento de cohesión en nuestra sociedad.</p>

<p>Ana de la Cueva</p>
<p>Presidenta de Patrimonio Nacional </p>
          </CardBody>
        </Card>
      </Collapse>

      <a> & </a>

      
      

      <Button color="primary" onClick={() => toggleCollapse('publico')} style={{ marginBottom: '1rem' }}>
      Información al público
      </Button>

      <Collapse isOpen={collapseStates['publico']} {...args}>
        <Card>
           <Button color="btn btn-outline-info" onClick={() => 
           toggleCollapse('general')} style={{
            
            marginTop:'1rem',
            marginBottom:'1rem',
            marginLeft:'1rem',
            marginRight:'1rem'
           }}>
            GENERAL
           </Button>
           <Collapse isOpen={collapseStates['general']}  {... args}>


            <Card>
              <CardBody>
              <p><strong>Información general al público:</strong> info@patrimonionacional.es</p>
              </CardBody>
            </Card>
           </Collapse>
        
          
          
        </Card>
        <Card>
              <Button color="btn btn-outline-info" onClick={() => 
              toggleCollapse('biblioteca')} style={{
            
                marginTop:'1rem',
                marginBottom:'1rem',
                marginLeft:'1rem',
                marginRight:'1rem'
              }}>
               Biblioteca Real
              </Button>
              <Collapse isOpen={collapseStates['biblioteca']}  {... args}>


                <Card>
                  <CardBody>
                  <p>real.biblioteca@patrimonionacional.es</p>
                  </CardBody>
                </Card>
              </Collapse>
        
       
         
       </Card>
       <Card>
              <Button color="btn btn-outline-info" onClick={() => 
              toggleCollapse('archivo')} style={{
            
                marginTop:'1rem',
                marginBottom:'1rem',
                marginLeft:'1rem',
                marginRight:'1rem'
              }}>
               Archivo General de Palacio
              </Button>
              <Collapse isOpen={collapseStates['archivo']}  {... args}>


                <Card>
                  <CardBody>
                  <p>agp@patrimonionacional.es</p>
                  </CardBody>
                </Card>
              </Collapse>
        
       
         
       </Card>
       <Card>
              <Button color="btn btn-outline-info" onClick={() => 
              toggleCollapse('comunicacion')} style={{
            
                marginTop:'1rem',
                marginBottom:'1rem',
                marginLeft:'1rem',
                marginRight:'1rem'
              }}>
                Departamento de comunicación
              </Button>
              <Collapse isOpen={collapseStates['comunicacion']}  {... args}>


                <Card>
                  <CardBody>
                  <p>comunicacion@patrimonionacional.es</p>
                  </CardBody>
                </Card>
              </Collapse>
        
       
         
       </Card>
       <Card>
              <Button color="btn btn-outline-info" onClick={() => 
              toggleCollapse('educacion')} style={{
            
                marginTop:'1rem',
                marginBottom:'1rem',
                marginLeft:'1rem',
                marginRight:'1rem'
              }}>
                Departamento de educación
              </Button>
              <Collapse isOpen={collapseStates['educacion']}  {... args}>


                <Card>
                  <CardBody>
                  <p>educacion@patrimonionacional.es</p>
                  </CardBody>
                </Card>
              </Collapse>
        
       
         
       </Card>
       <Card>
              <Button color="btn btn-outline-info" onClick={() => 
              toggleCollapse('delegaciones')} style={{
            
                marginTop:'1rem',
                marginBottom:'1rem',
                marginLeft:'1rem',
                marginRight:'1rem'
              }}>
                DELEGACIONES
              </Button>
              <Collapse isOpen={collapseStates['delegaciones']}  {... args}>


                <Card>
                  <CardBody>
                  <ul>

<li><p><strong>Delegación de La Almudaina (Palma):</strong> 971 21 41 34 / palaciorealalmudaina@patrimonionacional.es</p></li>

<li><p><strong>Delegación de Aranjuez (Madrid):</strong> 91 891 13 44 / delegacion.aranjuez@patrimonionacional.es</p></li>

<li><p><strong>Delegación de El Pardo (Madrid):</strong> 91 376 21 50 / elpardo@patrimonionacional.es</p></li>

<li><p><strong>Delegación de San Ildefonso (Segovia):</strong> 921 47 00 19 / delegacion.lagranja@patrimonionacional.es</p></li>

<li><p><strong>Delegación de San Jerónimo de Yuste (Cáceres):</strong> delegacion.yuste@patrimonionacional.es</p></li>

<li><p><strong>Delegación de San Lorenzo de El Escorial (Madrid):</strong> 91 890 59 02 - 91 890 59 03 / secretaria.escorial@patrimonionacional.es</p></li>

<li><p><strong>Delegación para Reales Patronatos: </strong> 91 108 17 41 / delegacion.realespatronatos@patrimonionacional.es</p></li>


</ul>
                  </CardBody>
                </Card>
              </Collapse>
        
       
         
       </Card>
       <Card>
              <Button color="btn btn-outline-info" onClick={() => 
              toggleCollapse('solicitud')} style={{
            
                marginTop:'1rem',
                marginBottom:'1rem',
                marginLeft:'1rem',
                marginRight:'1rem'
              }}>
                SOLICITUD DE QUEJAS, SUGERENCIAS Y FELICITACIONES
              </Button>
              <Collapse isOpen={collapseStates['solicitud']}  {... args}>


                <Card>
                  <CardBody>
                  <p>Acceder al formulario de Quejas, Sugerencias y Felicitaciones</p>
                  </CardBody>
                </Card>
              </Collapse>
        
       
         
       </Card>
       <Card>
              <Button color="btn btn-outline-info" onClick={() => 
              toggleCollapse('sistema')} style={{
            
                marginTop:'1rem',
                marginBottom:'1rem',
                marginLeft:'1rem',
                marginRight:'1rem'
              }}>
               SISTEMA INTERNO DE INFORMACIÓN
              </Button>
              <Collapse isOpen={collapseStates['sistema']}  {... args}>


                <Card>
                  <CardBody>
                  <p>Acceder a la resolución para la aprobación del Sistema Interno de Información</p>
                  </CardBody>
                </Card>
              </Collapse>
        
       
         
       </Card>
        
      </Collapse>
      {/* ... Otros collapses ... */}
    </React.StrictMode>
  );
}
// function CollapseInformacion(args) {



//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <React.StrictMode>
//     <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
//       INFORMACIÓN
//     </Button>
//     <Collapse isOpen={isOpen} {...args}>
//         <Card>
//           <CardBody>
//             <h1>Información institucional:</h1>
//             <p>Bienvenidos a Patrimonio Nacional.

// <br></br>Somos una institución histórico-cultural única en el mundo. Cuidamos de más de 1.000 inmuebles, 170.000 piezas artísticas y 18.000 hectáreas de espacios verdes de gran riqueza medioambiental. Y lo hacemos con una doble misión: preservar y dar a conocer este valiosísimo legado y facilitar a la jefatura del Estado la labor representativa que le otorga nuestra Constitución.

// <br></br>Esta web es una ventana a todo este conjunto de bienes y a las actividades culturales, educativas y científicas que organizamos para su difusión. Una ventana a los 19 palacios reales, reales monasterios y casas de campo en seis comunidades autónomas diferentes. <br></br><br></br>A los parques naturales como el Monte de El Pardo o el Bosque de Riofrío.<br></br>A los 6.500 cuadros firmados, entre otros, por El Greco, Caravaggio o Velázquez.<br></br> A la programación de nuestros conciertos.<br></br> A nuestros talleres.<br></br> A nuestras publicaciones. <br></br>

// <br></br>Dar a conocer Patrimonio Nacional es dar a conocer nuestra historia. Y preservar sus bienes de forma sostenible, consciente y rigurosa es asegurar que las futuras generaciones podrán disfrutar de ellos igual que lo hacemos ahora. <br></br>Somos conscientes de la importancia de nuestra tarea. Por eso queremos abrir nuestras puertas a toda la ciudadanía y ser un punto de encuentro que sirva de elemento de cohesión en nuestra sociedad.

// <br></br><br></br>Ana de la Cueva
// <br></br>Presidenta de Patrimonio Nacional </p>
//           </CardBody>
//         </Card>
//     </Collapse> 

//     <Collapse isOpen={isOpen} {...args}>
//         <Card>
//           <CardBody>
//           <h1>Información al público:</h1>
//           <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
//             GENERAL
//           </Button>
//     <Collapse isOpen={isOpen} {...args}>
//         <Card>
//           <CardBody>
//           <p><strong>Información general al público:</strong> info@patrimonionacional.es</p>
//           </CardBody>
//         </Card>
//     </Collapse>
    
//           <br></br>
//           <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
//           Biblioteca Real
//           </Button>
//         <Collapse isOpen={isOpen} {...args}>
//         <Card>
//           <CardBody>
//           <p>real.biblioteca@patrimonionacional.es</p>
//           </CardBody>
//         </Card>
//         </Collapse>
//           <br></br>
//           <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
//           Archivo General de Palacio
//           </Button>
//           <Collapse isOpen={isOpen} {...args}>
//         <Card>
//           <CardBody>
//           <p>agp@patrimonionacional.es</p>
//           </CardBody>
//         </Card>
//         </Collapse>
//           <br></br>
//           <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
//           Departamento de comunicación
//           </Button>
//           <Collapse isOpen={isOpen} {...args}>
//         <Card>
//           <CardBody>
//           <p>comunicacion@patrimonionacional.es</p>
//           </CardBody>
//         </Card>
//         </Collapse>
//           <br></br>
//           <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
//           Departamento de educación
//           </Button>
//           <Collapse isOpen={isOpen} {...args}>
//         <Card>
//           <CardBody>
//           <p>educacion@patrimonionacional.es</p>
//           </CardBody>
//         </Card>
//         </Collapse>
//           <br></br>
//           <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
//           DELEGACIONES
//           </Button>
//           <Collapse isOpen={isOpen} {...args}>
//         <Card>
//           <CardBody>
//           <ul>

// <li><p><strong>Delegación de La Almudaina (Palma):</strong> 971 21 41 34 / palaciorealalmudaina@patrimonionacional.es</p></li>

// <li><p><strong>Delegación de Aranjuez (Madrid):</strong> 91 891 13 44 / delegacion.aranjuez@patrimonionacional.es</p></li>

// <li><p><strong>Delegación de El Pardo (Madrid):</strong> 91 376 21 50 / elpardo@patrimonionacional.es</p></li>

// <li><p><strong>Delegación de San Ildefonso (Segovia):</strong> 921 47 00 19 / delegacion.lagranja@patrimonionacional.es</p></li>

// <li><p><strong>Delegación de San Jerónimo de Yuste (Cáceres):</strong> delegacion.yuste@patrimonionacional.es</p></li>

// <li><p><strong>Delegación de San Lorenzo de El Escorial (Madrid):</strong> 91 890 59 02 - 91 890 59 03 / secretaria.escorial@patrimonionacional.es</p></li>

// <li><p><strong>Delegación para Reales Patronatos: </strong> 91 108 17 41 / delegacion.realespatronatos@patrimonionacional.es</p></li>


// </ul>
//           </CardBody>
//         </Card>
//         </Collapse>
//           <br></br>
//           <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
//           SOLICITUD DE QUEJAS, SUGERENCIAS Y FELICITACIONES
//           </Button>
//           <Collapse isOpen={isOpen} {...args}>
//         <Card>
//           <CardBody>
//           <p>Acceder al formulario de Quejas, Sugerencias y Felicitaciones</p>
//           </CardBody>
//         </Card>
//         </Collapse>
//           <br></br>
//           <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
//           SISTEMA INTERNO DE INFORMACIÓN
//           </Button>
//           <Collapse isOpen={isOpen} {...args}>
//         <Card>
//           <CardBody>
//           <p>Acceder a la resolución para la aprobación del Sistema Interno de Información</p>
//           </CardBody>
//         </Card>
//         </Collapse>
//           </CardBody>
//         </Card>
//     </Collapse> 
//     </React.StrictMode>
     
//   );
// }

export default CollapseInformacion;