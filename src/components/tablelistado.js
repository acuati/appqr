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
         <strong>QR 1</strong><p>+info</p>
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
      <strong>QR 2</strong><p>+info</p>
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
      <strong>QR 3</strong><p>+info</p>
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
      <strong>QR 4</strong><p>+info</p>
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