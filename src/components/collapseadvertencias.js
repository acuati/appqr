import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { StaticImage } from 'gatsby-plugin-image';
function CollapseAdvertencias(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
      <strong>Advertencias en:</strong>
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card>
          <CardBody>
            
            <Collapse isOpen={isOpen} {...args}>
            <Card>
                <CardBody>
                <a href="https://www.patrimonionacional.es/aviso-legal">Aviso legal</a>
           
                </CardBody>
            </Card>
            </Collapse>
            
            
           
            <Collapse isOpen={isOpen} {...args}>
            <Card>
                <CardBody>
                <a href="https://www.patrimonionacional.es/accesibilidad">Accesibilidad</a>
           
                </CardBody>
            </Card>
            </Collapse>
            
            <Collapse isOpen={isOpen} {...args}>
            <Card>
                <CardBody>
                <a href="https://www.patrimonionacional.es/politica-de-privacidad">Política de Privacidad</a>
           
                </CardBody>
            </Card>
            </Collapse>
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default CollapseAdvertencias;