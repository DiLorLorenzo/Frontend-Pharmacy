import { Card, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";


function LoginForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
    if (!formData.email.trim() || !formData.password.trim()) {
      return "Email e password sono obbligatorie.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Inserisci un indirizzo email valido.";
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
    <Card className="login-card border-0">
      <Card.Body className="px-4 px-sm-5 py-5">
        <h3 className="text-center mb-4 fw-semibold">Accedi</h3>

        {error && (
          <Alert variant="danger" className="mb-4">
            {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci la tua email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Inserisci la password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-grid">
            <Button type="submit" variant="success" size="lg">
              Accedi
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default LoginForm;