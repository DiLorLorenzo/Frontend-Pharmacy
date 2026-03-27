import { Card, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import "../css/RegistrationForm.css";

function RegistrationForm({ title, fields, buttonText, onSubmit }) {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const validateForm = () => {
    for (const field of fields) {
      if (!formData[field.name]?.trim()) {
        return `Il campo "${field.label}" è obbligatorio.`;
      }
    }

    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return "Inserisci un indirizzo email valido.";
      }
    }

    if (
      Object.prototype.hasOwnProperty.call(formData, "password") &&
      Object.prototype.hasOwnProperty.call(formData, "confirmPassword")
    ) {
      if (formData.password !== formData.confirmPassword) {
        return "Le password non coincidono.";
      }
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <Card className="registration-card border-0">
      <Card.Body className="px-4 px-sm-5 py-5">
        <h3 className="text-center mb-4 fw-semibold">{title}</h3>

        {error && (
          <Alert variant="danger" className="mb-4">
            {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <Form.Group className="mb-3" key={field.name}>
              <Form.Label>{field.label}</Form.Label>

              <Form.Control
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              />
            </Form.Group>
          ))}

          <div className="d-grid mt-4">
            <Button type="submit" variant="success" size="lg">
              {buttonText}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default RegistrationForm;