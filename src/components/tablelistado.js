import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Table, Collapse, Button, CardBody, Card } from 'reactstrap';

function TableListado(args) {
return(


<Table
>
  <thead>
    <tr>
      <th>
        Mis QRS
      </th>
      <th>
        Todos
      </th>
      <th>
        Filtrar
      </th>
      <th>
        <input placeholder='Búsqueda'></input>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr>
  </tbody>
</Table>


)

}

export default TableListado