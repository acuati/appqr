import React, { useState } from 'react';
import { Link, navigate } from "gatsby";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { StaticImage } from 'gatsby-plugin-image';
function CollapseLogin(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
      <strong>ACCEDER</strong>
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card>
          <CardBody>
            
            <Collapse isOpen={isOpen} {...args}>
            <Card>
                <CardBody>
                {/* <StaticImage
        src="../images/flecha.png"
        loading="eager"
        width={30}
        quality={30}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ 
          // marginBottom: `var(--space-3)`,
          // marginLeft: `20rem`,
          // marginRight: '20rem' 
        }}
      /> */}
                   <p>Su login ha resultado exitoso</p>  
                   <a>Por favor: </a>
                <Link to="/acceso">
                      Click aquí para abrir su perfil
                </Link>
                
           
                </CardBody>
            </Card>
            </Collapse>
            
           
            
          
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default CollapseLogin;