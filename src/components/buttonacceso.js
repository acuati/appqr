import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function ButtonAcceso(args) {
return(
    <div>
    <Button
      color="primary"
    >
      <Link to="/crear">Crear QR</Link>
    </Button>
    </div>




)


}
export default ButtonAcceso