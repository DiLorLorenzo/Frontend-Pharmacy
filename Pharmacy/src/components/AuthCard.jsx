import { Card, Button } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
import "../css/AuthCard.css";
import { Link } from "react-router-dom";

function AuthCard() {
  return (
    <Card className="auth-card border-0">
      <Card.Body className="text-center px-4 px-sm-5 py-5">
        <div className="avatar-circle d-flex align-items-center justify-content-center mx-auto mb-4">
          <Person size={38} />
        </div>

        <div className="d-grid gap-3">
          <Button as={Link} to="/login" variant="success" size="lg">
            Accedi
          </Button>

          <Button as={Link} to="/register" variant="outline-success" size="lg">
            Registrati
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AuthCard;
