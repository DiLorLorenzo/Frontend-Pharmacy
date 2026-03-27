import { Container, Row, Col } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "../css/SecondaryHeader.css";

function SecondaryHeader({ title }) {
  const navigate = useNavigate();

  return (
    <header className="secondary-header">
      <Container fluid className="px-3 px-sm-4 px-md-5">
        <Row className="align-items-center">

          {/* Bottone back */}
          <Col xs="auto">
            <div
              className="back-button d-flex align-items-center justify-content-center"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={22} />
            </div>
          </Col>

          {/* Titolo */}
          <Col>
            <h5 className="mb-0 header-title text-center">
              {title}
            </h5>
          </Col>

          {/* spazio vuoto per bilanciare */}
          <Col xs="auto" style={{ width: "32px" }} />

        </Row>
      </Container>
    </header>
  );
}

export default SecondaryHeader;