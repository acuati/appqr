import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalBtnAcceso(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Acceso
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>ACCESO</ModalHeader>
        <ModalBody>
        <label>Usuario 
            <br></br>
          <input></input>
        </label>
        </ModalBody>
        <ModalBody>
        <label>Contraseña 
            <br></br>
          <input></input>
        </label>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Entrar
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            ¿Olvidó usuario o contraseña?
          </Button>
          <Button color="secondary" onClick={toggle}>
            Registro
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalBtnAcceso;