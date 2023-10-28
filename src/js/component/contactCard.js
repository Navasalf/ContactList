import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const ContactCard = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDeleteContact = () => {
    props.deleteContact(props.contactID);
    setModalOpen(false);
  };

  return (
    <div className="container">
      <div>
        <img src="https://st2.depositphotos.com/1032561/9154/i/450/depositphotos_91541566-stock-photo-executive-man-pointing-the-finger.jpg"></img>
      </div>
      <div className="info">
        <h1>{props.name}</h1>
        <div className="iconinfo">
          <i className="fa fa-location-dot"></i>
          <span>{props.address}</span>
        </div>
        <div className="iconinfo">
          <i className="fa fa-phone"></i>
          <span>{props.phone}</span>
        </div>
        <div className="iconinfo">
          <i className="fa fa-envelope"></i>
          <span>{props.email}</span>
        </div>
      </div>
      <div className="rightIcons">
        <Link to={"/edit/" + props.idx}>
          <button className="btn btn-outline-black">
            <i className="fa fa-pencil"></i>
          </button>
        </Link>

        <button
          type="button"
          className="btn btn-outline-black"
          onClick={() => setModalOpen(true)}
        >
          <i className="fa fa-trash-can fa-lg"></i>
        </button>

        <Modal show={modalOpen} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this contact?
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleModalClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => props.deleteContact(props.contactID)}
            >
              Delete
            </button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  );
};

export default ContactCard;
