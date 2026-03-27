import { Card, Button, Image } from "react-bootstrap";
import "../css/ProductCard.css";

function ProductCard({ product }) {
  return (
    <Card className="product-card border-0 h-100">
      <Card.Body className="px-3 py-3 d-flex flex-column">
        <div className="text-center mb-3">
          <Image
            src={product.image || "/default-product.png"}
            className="product-image"
          />
        </div>

        <h6 className="product-name mb-2">{product.nome}</h6>

        <p className="product-description mb-3">
          {product.descrizione}
        </p>

        <div className="mt-auto">
          <div className="product-price mb-3">€ {product.prezzo.toFixed(2)}</div>

          <div className="d-grid">
            <Button variant="success" size="sm">
              Aggiungi
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;