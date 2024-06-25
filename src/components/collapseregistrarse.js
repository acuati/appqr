import React, { useState } from 'react';
import { Link, navigate } from "gatsby";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { StaticImage } from 'gatsby-plugin-image';
function CollapseRegistrarse(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
      <strong>REGISTRAR</strong>
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card>
          <CardBody>
            
            <Collapse isOpen={isOpen} {...args}>
            <Card>
                <CardBody>
                <p>Su registro se ha realizado correctamente</p>  
                   <a>Por favor, vuelve al login</a>
               
           
                </CardBody>
            </Card>
            </Collapse>
            
           
            
          
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default CollapseRegistrarse;