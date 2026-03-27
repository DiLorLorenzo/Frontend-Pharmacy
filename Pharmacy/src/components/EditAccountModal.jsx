import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import "../css/EditAccountModal.css";

function EditAccountModal({ show, handleClose, type }) {
  const [value, setValue] = useState("");

  const getTitle = () => {
    switch (type) {
      case "password":
        return "Modifica password";
      case "email":
        return "Modifica email";
      case "phone":
        return "Modifica numero di cellulare";
      default:
        return "";
    }
  };

  const getPlaceholder = () => {
    switch (type) {
      case "password":
        return "Inserisci nuova password";
      case "email":
        return "Inserisci nuova email";
      case "phone":
        return "Inserisci numero di cellulare";
      default:
        return "";
    }
  };

  const getInputType = () => {
    return type === "password" ? "password" : "text";
  };

  const handleSubmit = () => {
    console.log(type, value);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>

      <Modal.Header closeButton>
        <Modal.Title>{getTitle()}</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <Form>
          <Form.Control
            type={getInputType()}
            placeholder={getPlaceholder()}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>

      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Annulla
        </Button>

        <Button variant="success" onClick={handleSubmit}>
          Salva
        </Button>
      </Modal.Footer>

    </Modal>
  );
}

export default EditAccountModal;