import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalCard } from "../Modal/ModalStyle";
import { api } from "../../api";

export const ModalDetails = (props) => {

  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);

  const handleSave = () => {
  api.post('/listbook', {
    title: props.title,
    image: props.image,
    author: props.author,
    pages: props.pages,
    genre: props.genre,
    year: props.year
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 }  

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
              <span>Year: {props.year}</span>
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
