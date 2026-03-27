import { Card } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import "../css/ProfileCard.css";

function ProfileCard({ user }) {
  return (
    <Card className="profile-card border-0">
      <Card.Body className="text-center px-4 px-sm-5 py-5">

        <div className="profile-avatar d-flex align-items-center justify-content-center mx-auto mb-4">
          <PersonCircle size={72} />
        </div>

        <div className="profile-info">

          <p className="mb-3">
            <strong>Nome:</strong> {user.nome}
          </p>

          <p className="mb-3">
            <strong>Cognome:</strong> {user.cognome}
          </p>

          <p className="mb-0">
            <strong>Codice fiscale:</strong> {user.codiceFiscale}
          </p>

        </div>

      </Card.Body>
    </Card>
  );
}

export default ProfileCard;