import { useMemo, useState } from "react";
import { Form, InputGroup, ListGroup } from "react-bootstrap";
import { Search, GeoAlt } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "../css/PharmacySearchBar.css";

function PharmacySearchBar({ pharmacies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredPharmacies = useMemo(() => {
    if (!searchTerm.trim()) return [];

    return pharmacies.filter((pharmacy) =>
      pharmacy.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [pharmacies, searchTerm]);

  const handleSelectPharmacy = (pharmacy) => {
    setSearchTerm("");
    navigate(`/pharmacies/${pharmacy.id}`);
  };

  return (
    <div className="pharmacy-search-wrapper">
      <InputGroup className="searchbar-container">
        <InputGroup.Text className="searchbar-icon">
          <Search />
        </InputGroup.Text>

        <Form.Control
          type="text"
          placeholder="Cerca una farmacia..."
          className="searchbar-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      {filteredPharmacies.length > 0 && (
        <ListGroup className="search-results-list mt-2">
          {filteredPharmacies.map((pharmacy) => (
            <ListGroup.Item
              key={pharmacy.id}
              action
              onClick={() => handleSelectPharmacy(pharmacy)}
              className="search-result-item d-flex align-items-center gap-2"
            >
              <GeoAlt size={16} />
              <span>{pharmacy.nome}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
}

export default PharmacySearchBar;