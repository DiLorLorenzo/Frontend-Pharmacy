import { Card, Button, Image } from "react-bootstrap";
import { GeoAlt } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../css/PharmacyCard.css";

function PharmacyCard({ pharmacy, showButton = true, title }) {
  return (
    <Card className="pharmacy-card border-0">
      <Card.Body className="px-4 py-4">

        {title && (
          <div className="mb-3 card-title-row">
            <span className="fw-semibold">{title}</span>
          </div>
        )}

        {/* INFO FARMACIA */}
        <div className="d-flex align-items-center gap-3 mb-4">

          <Image
            src={pharmacy.image || "/default-pharmacy.png"}
            roundedCircle
            className="pharmacy-avatar"
          />

          <div>
            <h5 className="mb-1 pharmacy-name">
              {pharmacy.nome}
            </h5>

            <div className="d-flex align-items-center gap-2 pharmacy-address">
              <GeoAlt size={14} />
              <span>{pharmacy.indirizzo}</span>
            </div>
          </div>

        </div>

        {showButton && (
          <div className="d-grid">
            <Button
              as={Link}
              to={`/pharmacies/${pharmacy.id}`}
              variant="success"
              size="lg"
            >
              Vai alla farmacia
            </Button>
          </div>
        )}

      </Card.Body>
    </Card>
  );
}

export default PharmacyCard;