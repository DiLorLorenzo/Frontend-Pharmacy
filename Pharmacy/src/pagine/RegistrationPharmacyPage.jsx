import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";


function RegistrationPharmacyPage() {
  const navigate = useNavigate();

  const fields = [
    { name: "nomeFarmacia", label: "Nome farmacia", type: "text", placeholder: "Inserisci il nome della farmacia" },
    { name: "indirizzo", label: "Indirizzo", type: "text", placeholder: "Inserisci l'indirizzo" },
    { name: "telefono", label: "Telefono", type: "text", placeholder: "Inserisci il numero di telefono" },
    { name: "partitaIva", label: "Partita IVA", type: "text", placeholder: "Inserisci la partita IVA" },
    { name: "orariApertura", label: "Orari di apertura", type: "text", placeholder: "Es. 08:00 - 20:00" },
    { name: "imageUrl", label: "URL immagine profilo", type: "text", placeholder: "Inserisci URL immagine" },
    { name: "nomeReferente", label: "Nome referente", type: "text", placeholder: "Inserisci il nome del referente" },
    { name: "cognomeReferente", label: "Cognome referente", type: "text", placeholder: "Inserisci il cognome del referente" },
    { name: "email", label: "Email", type: "email", placeholder: "Inserisci la email" },
    { name: "password", label: "Password", type: "password", placeholder: "Inserisci la password" },
    { name: "confirmPassword", label: "Conferma password", type: "password", placeholder: "Conferma la password" }
  ];

  const handleSubmit = async (data) => {
    try {
      const payload = {
        nomeFarmacia: data.nomeFarmacia,
        indirizzo: data.indirizzo,
        telefono: data.telefono,
        partitaIva: data.partitaIva,
        orariApertura: data.orariApertura,
        imageUrl: data.imageUrl,
        nomeReferente: data.nomeReferente,
        cognomeReferente: data.cognomeReferente,
        email: data.email,
        password: data.password
      };

      const response = await fetch("http://localhost:8080/api/auth/register/pharmacy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const text = await response.text();
      const result = text ? JSON.parse(text) : {};

      if (!response.ok) {
        throw new Error(result.message || `Errore registrazione: ${response.status}`);
      }

      alert("Registrazione farmacia completata. In attesa di approvazione.");
      navigate("/login");
    } catch (error) {
      console.error("Errore registrazione farmacia:", error.message);
      alert(error.message);
    }
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