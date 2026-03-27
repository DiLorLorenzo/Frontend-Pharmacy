import { Card, Button } from "react-bootstrap";
import "../css/CartSummaryCard.css";

function CartSummaryCard({ total }) {
  return (
    <Card className="cart-summary-card border-0">
      <Card.Body className="px-4 py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="summary-label">Totale</span>
          <span className="summary-total">€ {total.toFixed(2)}</span>
        </div>

        <div className="d-grid">
          <Button variant="success" size="lg">
            Procedi all'ordine
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CartSummaryCard;