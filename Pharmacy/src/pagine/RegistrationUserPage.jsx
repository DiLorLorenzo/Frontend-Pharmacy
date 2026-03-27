import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";





function RegistrationUserPage() {

  const fields = [
    { name: "nome", label: "Nome", type: "text", placeholder: "Inserisci il nome" },
    { name: "cognome", label: "Cognome", type: "text", placeholder: "Inserisci il cognome" },
    { name: "email", label: "Email", type: "email", placeholder: "Inserisci la tua email" },
    { name: "password", label: "Password", type: "password", placeholder: "Inserisci la password" },
    { name: "confirmPassword", label: "Conferma password", type: "password", placeholder: "Conferma la password" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-light min-vh-100">

      <Header />

      <Container fluid className="register-card-section px-3 px-sm-4">

        <Row className="justify-content-center">

          <Col xs={12} sm={10} md={8} lg={7} xl={6}>

            <RegistrationForm
              title="Registrazione utente"
              fields={fields}
              buttonText="Registrati"
              onSubmit={handleSubmit}
            />

          </Col>

        </Row>

      </Container>

    </div>
  );
}

export default RegistrationUserPage;        