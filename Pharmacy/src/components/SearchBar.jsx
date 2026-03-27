import { Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "../css/SearchBar.css";

function SearchBar({ placeholder = "Cerca farmacie o farmaci..." }) {
  return (
    <InputGroup className="searchbar-container  px-3 px-sm-4 px-md-5 ">

      <InputGroup.Text className="searchbar-icon">
        <Search />
      </InputGroup.Text>

      <Form.Control
        type="text"
        placeholder={placeholder}
        className="searchbar-input"
      />

    </InputGroup>
  );
}

export default SearchBar;