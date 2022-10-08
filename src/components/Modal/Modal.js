import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalCard } from "../Modal/ModalStyle";

export const ModalDetails = (props) => {
  // const [show, setShow] = useState(false);

  const [info, setInfo] = useState({
    title: props.title,
    image: props.image
  });

  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);

  // const data = {
  //   title: props.title
  // }

  const handleSave = () => {
    let data = info;
    console.log(data);
    setInfo(data);
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <ModalCard>
          <Modal.Header closeButton>
            <Modal.Title>Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <div className="poster">
              <img src={props.image} alt="poster" />
            </div>
            <div className="info">
              <span>Title: {props.title} </span>
              <span>Genre: {props.genre}</span>
              <span>Pages: {props.pages} </span>
              <span>Author: {props.author}</span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleSave();
              }}
            >
              Add my list
            </Button>
          </Modal.Footer>
        </ModalCard>
      </Modal>
    </>
  );
};
