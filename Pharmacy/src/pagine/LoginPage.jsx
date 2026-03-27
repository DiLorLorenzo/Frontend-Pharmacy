import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import "../css/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Errore durante il login");
      }

      console.log("Login riuscito:", result);

      
      localStorage.setItem("userEmail", result.email);
      localStorage.setItem("userRole", result.role);

      // Redirect in base al ruolo
      if (result.role === "CUSTOMER") {
        navigate("/customer");
      } else if (result.role === "PHARMACY") {
        navigate("/pharmacy");
      } else if (result.role === "ADMIN") {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Errore login:", error.message);
      alert(error.message);
    }
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