// import { Link } from 'gatsby';
// import React, { useState } from 'react';
// import { Table, Collapse, Button, CardBody, Card } from 'reactstrap';
// import { StaticImage } from "gatsby-plugin-image"

// function TableListado(args) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredQrs, setFilteredQrs] = useState([]);

//   const qrs = [
//     { id: 'qr1', link: '/qr1', image: '../images/qr-color-palaciodearanjuez.png' },
//     { id: 'qr2', link: '/qr2', image: '../images/qr-color-jardin-del-principe.png' },
//     { id: 'qr3', link: '/qr3', image: '../images/qr-color-parterre.png' },
//     { id: 'qr4', link: '/qr4', image: '../images/qr-color-palaciodearanjuez.png' }
//   ];

//   const handleSearch = () => {
//     if (searchTerm) {
//       const filtered = qrs.filter(qr => qr.id === searchTerm.toLowerCase());
//       setFilteredQrs(filtered);
//     } else {
//       setFilteredQrs(qrs);
//     }
//   };

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const displayQrs = filteredQrs.length > 0 ? filteredQrs : qrs;
// return(

// <Table
// >
//   <thead>
//     <tr>
//       <th>
//       Todos mis QRS
//       </th>
      
//       {/* <th>
       
//       </th>
//       <th>
       
//       </th> */}
//       <th>
//         {/* <input placeholder='Búsqueda'></input> */}
//         <input 
//               placeholder='Búsqueda' 
//               value={searchTerm} 
//               onChange={handleChange}
//         />
//       </th>
//       <th>
//         <button onClick={handleSearch}>BUSCAR</button>
        
//       </th>
     
//     </tr>
//   </thead>
//   <tbody>
//   {displayQrs.map((qr, index) => (
//     <tr key={qr.id}>
//       <th scope="row"> 
         
//       {/* <Button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="+info"> */}
//       <Button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="">
//                 <StaticImage
//                   src={qr.image}
//                   loading="eager"
//                   height={50}
//                   width={50}
//                   quality={95}
//                   formats={["auto", "webp", "avif"]}
//                   alt=""
//                 />
//                 <Link to={qr.link}>{qr.id.toUpperCase()}</Link>

//         {/* <StaticImage
//             src="../images/qr-color-palaciodearanjuez.png"
//             loading="eager"
//            height={50}
//            width={50}
//            quality={95}
//            formats={["auto", "webp", "avif"]}
//            alt=""

           
        
        
        
//         /> */}
//         {/* Qr-ejemplo */}
//         {/* <Link to="/qr1">QR1</Link> */}
        
//       </Button>

         
       
        
         
         
//       </th>
//       <td>
//         {/* <strong>Jardín de la Isla</strong> */}
//       </td>
//       <td>
//         <strong>12/02/2025</strong>
//         {/* <p>Juan Benito Came</p> */}
//       </td>
//       <td>
//         {/* <strong>QR sobre la historia del Jardín de la Isla</strong> */}
//       </td>
//     </tr>
//     <tr>
//       <th scope="row">
//       <Button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="">

//         <StaticImage
//             src="../images/qr-color-jardin-del-principe.png"
//             loading="eager"
//            height={50}
//            width={50}
//            quality={95}
//            formats={["auto", "webp", "avif"]}
//            alt=""
        
        
        
//         />
//         {/* Qr-ejemplo */}
//         <Link to="/qr2">QR2</Link>
        
//       </Button>
//       </th>
//       <td>
//       {/* <strong>Jardín del Príncipe</strong> */}
//       </td>
//       <td>
//       <strong>12/02/2025</strong>
//       {/* <p>Juan Benito Came</p> */}
//       </td>
//       <td>
//       {/* <strong>QR sobre la historia del Jardín del Príncipe</strong> */}
//       </td>
//     </tr>
//     <tr>
//       <th scope="row">
//       <Button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="">

//         <StaticImage
//             src="../images/qr-color-parterre.png"
//             loading="eager"
//            height={50}
//            width={50}
//            quality={95}
//            formats={["auto", "webp", "avif"]}
//            alt=""
        
        
        
//         />
//         {/* Qr-ejemplo */}
//         <Link to="/qr3">QR3</Link>
        
//       </Button>
//       </th>
//       <td>
//       {/* <strong>Jardín del Parterre</strong> */}
//       </td>
//       <td>
//       <strong>12/02/2025</strong>
//       {/* <p>Juan Benito Came</p> */}
//       </td>
//       <td>
//       {/* <strong>QR sobre la historia del Jardín del Parterre</strong> */}
//       </td>
//     </tr>
//     <tr>
//       <th scope="row">
//       <Button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="">

//         <StaticImage
//             src="../images/qr-color-palaciodearanjuez.png"
//             loading="eager"
//            height={50}
//            width={50}
//            quality={95}
//            formats={["auto", "webp", "avif"]}
//            alt=""
        
        
        
//         />
//         {/* Qr-ejemplo */}
//         <Link to="/qr4">QR4</Link>
        
//       </Button>
//       </th>
//       <td>
//       {/* <strong>Jardín de Isabel II</strong> */}
//       </td>
//       <td>
//       <strong>12/02/2025</strong>
//       {/* <p>Juan Benito Came</p> */}
//       </td>
//       <td>
//       {/* <strong>QR sobre la historia del Jardín de Isabel II</strong> */}
//       </td>
//     </tr>
//   </tbody>
// </Table>


// )

// }

// export default TableListado

// import { Link } from 'gatsby';
// import React, { useState } from 'react';
// import { Table, Button } from 'reactstrap';
// import { StaticImage } from "gatsby-plugin-image";

// function TableListado(args) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredQrs, setFilteredQrs] = useState([]);

//   const qrs = [
//     { id: 'qr1', link: '/qr1', image: '../images/qr-color-palaciodearanjuez.png' },
//     { id: 'qr2', link: '/qr2', image: '../images/qr-color-jardin-del-principe.png' },
//     { id: 'qr3', link: '/qr3', image: '../images/qr-color-parterre.png' },
//     { id: 'qr4', link: '/qr4', image: '../images/qr-color-palaciodearanjuez.png' }
//   ];

//   const handleSearch = () => {
//     if (searchTerm) {
//       const filtered = qrs.filter(qr => qr.id === searchTerm.toLowerCase());
//       setFilteredQrs(filtered);
//     } else {
//       setFilteredQrs(qrs);
//     }
//   };

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const displayQrs = filteredQrs.length > 0 ? filteredQrs : qrs;

//   return (
//     <Table>
//       <thead>
//         <tr>
//           <th>Todos mis QRS</th>
//           <th>
//             <input 
//               placeholder='Búsqueda' 
//               value={searchTerm} 
//               onChange={handleChange}
//             />
//           </th>
//           <th>
//             <button onClick={handleSearch}>BUSCAR</button>
//           </th>
//         </tr>
//       </thead>
//       <tbody>
        
//         {displayQrs.map((qr, index) => (
//           <tr key={qr.id}>
//             <th scope="row">
              
//               <Button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="">
//               {/* <StaticImage
//                 src="../images/qr-color-palaciodearanjuez.png"
                
//                 loading="eager"
//                 height={50}
//                 width={50}
//                 quality={95}
//                 formats={["auto", "webp", "avif"]}
//                 alt=""
        
        
        
//               /> */}
                




//                 {/* <StaticImage
//                   src={qr.image}
//                   loading="eager"
//                   height={50}
//                   width={50}
//                   quality={95}
//                   formats={["auto", "webp", "avif"]}
//                   alt=""
//                 /> */}
//                 <Link to={qr.link}>{qr.id.toUpperCase()}</Link>
//               </Button>
//             </th>
//             <td></td>
//             <td><strong>12/02/2025</strong></td>
//             <td></td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// }

// export default TableListado;


// import { Link } from 'gatsby';
// import React, { useState } from 'react';
// import { Table, Button } from 'reactstrap';
// import { StaticImage } from "gatsby-plugin-image";

// function TableListado(args) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredQrs, setFilteredQrs] = useState([]);

//   const qrs = [
//     { id: 'qr1', link: '/qr1', image: '../images/qr-color-palaciodearanjuez.png' },
//     { id: 'qr2', link: '/qr2', image: '../images/qr-color-jardin-del-principe.png' },
//     { id: 'qr3', link: '/qr3', image: '../images/qr-color-parterre.png' },
//     { id: 'qr4', link: '/qr4', image: '../images/qr-color-palaciodearanjuez.png' }
//   ];

//   const handleSearch = () => {
//     if (searchTerm) {
//       const filtered = qrs.filter(qr => qr.id === searchTerm.toLowerCase());
//       setFilteredQrs(filtered);
//     } else {
//       setFilteredQrs(qrs);
//     }
//   };

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const displayQrs = filteredQrs.length > 0 ? filteredQrs : qrs;

//   return (
//     <Table>
//       <thead>
//         <tr>
//           <th>Todos mis QRS</th>
//           <th>
//             <input 
//               placeholder='Búsqueda' 
//               value={searchTerm} 
//               onChange={handleChange}
//             />
//           </th>
//           <th>
//             <button onClick={handleSearch}>BUSCAR</button>
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         {displayQrs.map((qr) => (
//           <tr key={qr.id}>
//             <th scope="row">
//               <Button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="">
//                 <StaticImage
//                   src={qr.image}
//                   loading="eager"
//                   height={50}
//                   width={50}
//                   quality={95}
//                   formats={["auto", "webp", "avif"]}
//                   alt={qr.id}
//                 />
//                 <Link to={qr.link}>{qr.id.toUpperCase()}</Link>
//               </Button>
//             </th>
//             <td></td>
//             <td><strong>12/02/2025</strong></td>
//             <td></td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// }

// export default TableListado;

import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import { StaticImage } from "gatsby-plugin-image";

function TableListado(args) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQrs, setFilteredQrs] = useState([]);

  const qrs = [
    { id: 'qr1', link: '/qr1', image: '../images/qr-color-palaciodearanjuez.png' },
    { id: 'qr2', link: '/qr2', image: '../images/qr-color-jardin-del-principe.png' },
    { id: 'qr3', link: '/qr3', image: '../images/qr-color-parterre.png' }
    // { id: 'qr4', link: '/qr4', image: '../images/qr-color-palaciodearanjuez.png' }
  ];

  const handleSearch = () => {
    if (searchTerm) {
      const filtered = qrs.filter(qr => qr.id === searchTerm.toLowerCase());
      setFilteredQrs(filtered);
    } else {
      setFilteredQrs(qrs);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const displayQrs = filteredQrs.length > 0 ? filteredQrs : qrs;

  return (
    <Table>
      <thead>
        <tr>
          <th>Todos mis QRS 
            
          </th>
          <th>
            <input 
              placeholder='Búsqueda' 
              value={searchTerm} 
              onChange={handleChange}
            />
          </th>
          <th>
            <button onClick={handleSearch}>BUSCAR</button>
          </th>
        </tr>
        <p>Almacenamiento lleno de QRS </p>
      </thead>
      <tbody>
        {displayQrs.map((qr) => (
          <tr key={qr.id}>
            <th scope="row">
              <Button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="haz click para visualizarlo">
                <StaticImage
                  src={qr.image}
                  loading="eager"
                  height={50}
                  width={50}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt={qr.id}
                />
                <Link to={qr.link}>{qr.id.toUpperCase()}</Link>
              </Button>
            </th>
            <td>
          
            </td>
            <td><strong>12/02/2025</strong></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableListado;
