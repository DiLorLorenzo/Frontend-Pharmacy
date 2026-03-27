import { Card, Image } from "react-bootstrap";
import { GeoAlt, Clock } from "react-bootstrap-icons";
import "../css/PharmacyInfoCard.css";

function PharmacyInfoCard({ pharmacy }) {
  return (
    <Card className="pharmacy-info-card border-0">
      <Card.Body className="px-4 py-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <Image
            src={pharmacy.image || "/default-pharmacy.png"}
            roundedCircle
            className="pharmacy-info-avatar"
          />

          <div>
            <h5 className="mb-1 pharmacy-info-name">{pharmacy.nome}</h5>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2 mb-2 pharmacy-info-text">
          <GeoAlt size={16} />
          <span>{pharmacy.indirizzo}</span>
        </div>

        <div className="d-flex align-items-center gap-2 pharmacy-info-text">
          <Clock size={16} />
          <span>{pharmacy.orari}</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PharmacyInfoCard;