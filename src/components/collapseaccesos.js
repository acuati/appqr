import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { StaticImage } from 'gatsby-plugin-image';
function CollapseAccesos(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
      <strong>Creación & Listado de tus QRS</strong>
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card>
          <CardBody>
           
            
            
            
            
           
            <Collapse isOpen={isOpen} {...args}>
            <Card>
                <CardBody>
                <Button
                    color="primary"
                >
                <Link to="/crear">Crear QR</Link>
                </Button>
                
            
                </CardBody>
            </Card>
            </Collapse>

            
            <Collapse isOpen={isOpen} {...args}>
            <Card>
                <CardBody>
                <Button
                    color="primary"
                >
                <Link to="/listado">Listado QR</Link>
                </Button>
               
                </CardBody>
            </Card>
            </Collapse>
            
          
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default CollapseAccesos;