import React from "react";
import { Modal } from "react-bootstrap";

const CountryInfo = (props) => {
  return (
    <Modal
      dialogClassName="modal-width"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Login or Sign In </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Do you have an account?</p>
      </Modal.Body>

      <Modal.Footer>Footer</Modal.Footer>
    </Modal>
  );
};

export default CountryInfo;
