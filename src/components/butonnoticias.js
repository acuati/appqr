import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function ButonNoticias(args) {
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
export default ButonNoticias