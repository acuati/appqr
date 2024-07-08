import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap';
import { StaticImage } from 'gatsby-plugin-image';

function CardColumns(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  return (
    <React.StrictMode>
        
 <h1>Lista de usuarios</h1>

 
      
    </React.StrictMode>
  );
}

export default CardColumns;























