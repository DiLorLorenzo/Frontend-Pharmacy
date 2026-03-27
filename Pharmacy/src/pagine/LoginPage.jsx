import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import "../css/LoginPage.css";

function LoginPage() {
  const handleSubmit = (data) => {
    console.log("Login:", data);
  };

  return (
    <div className="bg-light min-vh-100">
      <Header />

      <Container fluid className="login-card-section px-3 px-sm-4">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <LoginForm onSubmit={handleSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;