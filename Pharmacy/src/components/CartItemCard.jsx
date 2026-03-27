import { Card, Button, Image } from "react-bootstrap";
import { Trash, Plus, Dash } from "react-bootstrap-icons";
import "../css/CartItemCard.css";

function CartItemCard({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <Card className="cart-item-card border-0">
      <Card.Body className="px-3 py-3">
        <div className="d-flex align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <Image
              src={item.image || "/default-product.png"}
              rounded
              className="cart-item-image"
            />

            <div className="cart-item-info">
              <h6 className="mb-1 cart-item-name">{item.name}</h6>
              <p className="mb-1 cart-item-pharmacy">{item.pharmacyName}</p>
              <p className="mb-0 cart-item-price">€ {item.price.toFixed(2)}</p>
            </div>
          </div>

          <div className="d-flex flex-column align-items-end gap-2">
            <div className="quantity-controls d-flex align-items-center">
              <Button
                variant="light"
                className="quantity-btn"
                onClick={() => onDecrease(item.id)}
              >
                <Dash />
              </Button>

              <span className="quantity-value">{item.quantity}</span>

              <Button
                variant="light"
                className="quantity-btn"
                onClick={() => onIncrease(item.id)}
              >
                <Plus />
              </Button>
            </div>

            <Button
              variant="outline-danger"
              size="sm"
              className="remove-btn"
              onClick={() => onRemove(item.id)}
            >
              <Trash size={14} />
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CartItemCard;