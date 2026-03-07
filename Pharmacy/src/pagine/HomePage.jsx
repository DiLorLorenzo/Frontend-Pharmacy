import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import AuthCard from "../components/AuthCard";
import "../css/HomePage.css";

function HomePage() {
  return (
    <div className="home-page bg-light min-vh-100">
      <Header />

      <Container fluid className="card-section px-3 px-sm-4">
        <Row className="justify-content-center">
          <Col xs={11} sm={8} md={6} lg={4} xl={3}>
            <AuthCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;