import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../css/EditAccountModal.css";

function EditAccountModal({ show, handleClose, type }) {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    phoneNumber: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (show) {
      setFormData({
        currentPassword: "",
        newPassword: "",
        phoneNumber: "",
      });
      setError("");
      setSuccess("");
    }
  }, [show, type]);

  const getTitle = () => {
    switch (type) {
      case "password":
        return "Modifica password";
      case "phone":
        return "Modifica numero di cellulare";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Utente non autenticato");
      return;
    }

    try {
      let url = "";
      let payload = {};

      if (type === "password") {
        if (!formData.currentPassword.trim() || !formData.newPassword.trim()) {
          setError("Compila tutti i campi della password");
          return;
        }

        url = "http://localhost:8080/api/users/me/password";
        payload = {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        };
      }

      if (type === "phone") {
        if (!formData.phoneNumber.trim()) {
          setError("Inserisci il numero di cellulare");
          return;
        }

        url = "http://localhost:8080/api/users/me/phone";
        payload = {
          phoneNumber: formData.phoneNumber,
        };
      }

      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const text = await response.text();

      if (!response.ok) {
        throw new Error(text || "Operazione non riuscita");
      }

      setSuccess(text || "Operazione completata");

      setTimeout(() => {
        handleClose();
      }, 900);
    } catch (err) {
      setError(err.message);
      setSuccess("");
    }
  };

  if (type !== "password" && type !== "phone") return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{getTitle()}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form>
          {type === "password" && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Password attuale</Form.Label>
                <Form.Control
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Inserisci la password attuale"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Nuova password</Form.Label>
                <Form.Control
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Inserisci la nuova password"
                />
              </Form.Group>
            </>
          )}

          {type === "phone" && (
            <Form.Group>
              <Form.Label>Nuovo numero di cellulare</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Inserisci il nuovo numero"
              />
            </Form.Group>
          )}
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