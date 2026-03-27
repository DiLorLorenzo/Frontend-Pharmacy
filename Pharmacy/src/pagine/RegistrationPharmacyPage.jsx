import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";


function RegistrationPharmacyPage() {

  const fields = [
    { name: "nomeFarmacia", label: "Nome farmacia", type: "text", placeholder: "Inserisci il nome della farmacia" },
    { name: "email", label: "Email", type: "email", placeholder: "Inserisci la email" },
    { name: "telefono", label: "Telefono", type: "text", placeholder: "Inserisci il numero di telefono" },
    { name: "indirizzo", label: "Indirizzo", type: "text", placeholder: "Inserisci l'indirizzo" },
    { name: "partitaIva", label: "Partita IVA", type: "text", placeholder: "Inserisci la partita IVA" },
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

          <Col xs={12} sm={10} md={9} lg={8} xl={7}>

            <RegistrationForm
              title="Registrazione farmacista"
              fields={fields}
              buttonText="Invia richiesta"
              onSubmit={handleSubmit}
            />

          </Col>

        </Row>

      </Container>

    </div>
  );
}

export default RegistrationPharmacyPage;