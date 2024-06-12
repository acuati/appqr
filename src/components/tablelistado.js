import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Table, Collapse, Button, CardBody, Card } from 'reactstrap';
import { StaticImage } from "gatsby-plugin-image"

function TableListado(args) {
return(

<Table
>
  <thead>
    <tr>
      <th>
      Todos mis QRS
      </th>
      
      {/* <th>
       
      </th>
      <th>
       
      </th> */}
      <th>
        <input placeholder='Búsqueda'></input>
        
      </th>
      <th>
        <button>BUSCAR</button>
        
      </th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"> 
         
      <Button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="+info">

        <StaticImage
            src="../images/qr-color-palaciodearanjuez.png"
            loading="eager"
           height={50}
           width={50}
           quality={95}
           formats={["auto", "webp", "avif"]}
           alt=""

           
        
        
        
        />
        {/* Qr-ejemplo */}
        <Link to="/qr1">QR1</Link>
        
      </Button>

         
       
        
         
         
      </th>
      <td>
        <strong>Jardín de la Isla</strong>
      </td>
      <td>
        <strong>12/02/2025</strong>
        <p>Juan Benito Came</p>
      </td>
      <td>
        <strong>QR sobre la historia del Jardín de la Isla</strong>
      </td>
    </tr>
    <tr>
      <th scope="row">
      <Button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="+info">

        <StaticImage
            src="../images/qr-color-jardin-del-principe.png"
            loading="eager"
           height={50}
           width={50}
           quality={95}
           formats={["auto", "webp", "avif"]}
           alt=""
        
        
        
        />
        {/* Qr-ejemplo */}
        <Link to="/qr2">QR2</Link>
        
      </Button>
      </th>
      <td>
      <strong>Jardín del Príncipe</strong>
      </td>
      <td>
      <strong>12/02/2025</strong>
      <p>Juan Benito Came</p>
      </td>
      <td>
      <strong>QR sobre la historia del Jardín del Príncipe</strong>
      </td>
    </tr>
    <tr>
      <th scope="row">
      <Button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="+info">

        <StaticImage
            src="../images/qr-color-parterre.png"
            loading="eager"
           height={50}
           width={50}
           quality={95}
           formats={["auto", "webp", "avif"]}
           alt=""
        
        
        
        />
        {/* Qr-ejemplo */}
        <Link to="/qr3">QR3</Link>
        
      </Button>
      </th>
      <td>
      <strong>Jardín del Parterre</strong>
      </td>
      <td>
      <strong>12/02/2025</strong>
      <p>Juan Benito Came</p>
      </td>
      <td>
      <strong>QR sobre la historia del Jardín del Parterre</strong>
      </td>
    </tr>
    <tr>
      <th scope="row">
      <Button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="+info">

        <StaticImage
            src="../images/qr-color-palaciodearanjuez.png"
            loading="eager"
           height={50}
           width={50}
           quality={95}
           formats={["auto", "webp", "avif"]}
           alt=""
        
        
        
        />
        {/* Qr-ejemplo */}
        <Link to="/qr4">QR4</Link>
        
      </Button>
      </th>
      <td>
      <strong>Jardín de Isabel II</strong>
      </td>
      <td>
      <strong>12/02/2025</strong>
      <p>Juan Benito Came</p>
      </td>
      <td>
      <strong>QR sobre la historia del Jardín de Isabel II</strong>
      </td>
    </tr>
  </tbody>
</Table>


)

}

export default TableListado