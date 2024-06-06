import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { StaticImage } from 'gatsby-plugin-image';
function CollapseRedes(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
      <strong>Siguenos en:</strong>
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card>
          <CardBody>
            <StaticImage
            src="../images/youtube.png"
            loading="eager"
            height={20}
            width={20}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
            // url="https://www.youtube.com/channel/UC1aAN4rDbKBeFmwKMBc_2dA"
            />
            <Collapse isOpen={isOpen} {...args}>
            <Card>
                <CardBody>
                <a href="https://www.youtube.com/channel/UC1aAN4rDbKBeFmwKMBc_2dA">youtube</a>
           
                </CardBody>
            </Card>
            </Collapse>
            
            <StaticImage
                src="../images/x.png"
                loading="eager"
                height={20}
                width={20}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
                // url="https://x.com/PatrimNacional"
            />
           
            <Collapse isOpen={isOpen} {...args}>
            <Card>
                <CardBody>
                <a href="https://x.com/PatrimNacional">x</a>
           
                </CardBody>
            </Card>
            </Collapse>
            <StaticImage
                src="../images/linkedin.png"
                loading="eager"
                height={30}
                width={30}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
                // url="https://es.linkedin.com/company/patrimonionacional"
            />
            <Collapse isOpen={isOpen} {...args}>
            <Card>
                <CardBody>
                <a href="https://es.linkedin.com/company/patrimonionacional">linkedin</a>
           
                </CardBody>
            </Card>
            </Collapse>
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default CollapseRedes;