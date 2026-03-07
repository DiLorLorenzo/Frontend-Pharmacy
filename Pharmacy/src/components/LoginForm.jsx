import { Card, Form, Button } from "react-bootstrap";
import "../css/login.css"

function LoginForm() {
  return (
    <Card className="login-card border-0">

      <Card.Body className="px-4 px-sm-5 py-5">

        <h3 className="text-center mb-4 fw-semibold">
          Accedi a DeliveryPharma
        </h3>

        <Form>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci la tua email"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Inserisci la password"
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="success" size="lg">
              Accedi
            </Button>
          </div>

        </Form>

      </Card.Body>

    </Card>
  );
}

export default LoginForm;