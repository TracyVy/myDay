import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

// const zipVal = "";

const Search = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl placeholder="Enter a zip code" aria-label="Zip Code" />
        <Button variant="outline-secondary">Search</Button>
      </InputGroup>
    </div>
  );
};

export default Search;
