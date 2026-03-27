import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";


function RegistrationUserPage() {
  const navigate = useNavigate();

  const fields = [
    { name: "nome", label: "Nome", type: "text", placeholder: "Inserisci il nome" },
    { name: "cognome", label: "Cognome", type: "text", placeholder: "Inserisci il cognome" },
    { name: "email", label: "Email", type: "email", placeholder: "Inserisci la tua email" },
    { name: "password", label: "Password", type: "password", placeholder: "Inserisci la password" },
    { name: "confirmPassword", label: "Conferma password", type: "password", placeholder: "Conferma la password" },
    { name: "codiceFiscale", label: "Codice fiscale", type: "text", placeholder: "Inserisci il codice fiscale" },
    { name: "phoneNumber", label: "Numero di cellulare", type: "text", placeholder: "Inserisci il numero di cellulare" },
  ];

  const handleSubmit = async (data) => {
    try {
      const payload = {
        nome: data.nome,
        cognome: data.cognome,
        email: data.email,
        password: data.password,
        codiceFiscale: data.codiceFiscale,
        phoneNumber: data.phoneNumber,
      };

      const response = await fetch("http://localhost:8080/api/auth/register/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Errore durante la registrazione");
      }

      console.log("Registrazione riuscita:", result);
      alert("Registrazione completata con successo");

      navigate("/login");
    } catch (error) {
      console.error("Errore registrazione:", error.message);
      alert(error.message);
    }
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