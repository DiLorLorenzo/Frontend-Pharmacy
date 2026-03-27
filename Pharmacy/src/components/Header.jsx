import { Container, Row, Col } from "react-bootstrap";
import "../css/Header.css";

function Header() {
  return (
    <header className="home-header text-white">
      <Container fluid className="py-4 py-sm-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <div className="text-center">
              <h4 className="fw-semibold mb-5">ApoTech</h4>
              <h1 className="fw-bold mb-3">Benvenuto!</h1>
              <div className="welcome-divider mx-auto"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;