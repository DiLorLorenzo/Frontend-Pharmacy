import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../css/RegistrationChoicePage.css";

function RegistrationChoicePage() {
  return (
    <div className="bg-light min-vh-100">

      <Header />

      <Container fluid className="register-choice-section px-3 px-sm-4">

        <Row className="justify-content-center">

          <Col xs={12} sm={10} md={8} lg={6} xl={5}>

            <Card className="register-choice-card border-0">

              <Card.Body className="text-center px-4 px-sm-5 py-5">

                <h3 className="fw-semibold mb-4">
                  Scegli il tipo di registrazione
                </h3>

                <div className="d-grid gap-3">

                  <Button
                    as={Link}
                    to="/register/user"
                    variant="success"
                    size="lg"
                  >
                    Registrati come utente
                  </Button>

                  <Button
                    as={Link}
                    to="/register/pharmacy"
                    variant="outline-success"
                    size="lg"
                  >
                    Registrati come farmacista
                  </Button>

                </div>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>

    </div>
  );
}

export default RegistrationChoicePage;