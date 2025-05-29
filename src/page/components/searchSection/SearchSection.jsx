import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchSection() {
  return (
    <div className="p-3 bg-light rounded container-xxl">
      {/* Top Buttons */}
      <div className="d-flex mb-3">
        <Button variant="primary" className="mr-2">
          I Want to Buy a Property
        </Button>
        <Button variant="outline-primary" className="mr-2">
          Rent
        </Button>
        <Button variant="outline-primary">Sell Property</Button>
      </div>

      {/* Bottom Search Form */}
      <Form inline className="d-flex align-items-center">
        <FormControl
          type="text"
          placeholder="Region, Area, Unit Area"
          className="mr-2"
          style={{ width: "200px" }}
        />
        <FormControl as="select" className="mr-2" style={{ width: "150px" }}>
          <option>Property Type</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </FormControl>
        <FormControl as="select" className="mr-2" style={{ width: "150px" }}>
          <option>Price</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </FormControl>
        <FormControl as="select" className="mr-2" style={{ width: "150px" }}>
          <option>Area (sq ft)</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </FormControl>
        <Button variant="primary">Search</Button>
      </Form>
    </div>
  );
}

export default SearchSection;
