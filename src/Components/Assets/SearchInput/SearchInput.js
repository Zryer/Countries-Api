import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import CardContainer from '../../CardContainer/CardContainer';

const SearchInput = ({ countryData }) => {

  const [filteredList, setFilteredList ] = useState();

const filterBySearch = (e) => {
  const search = e.target.value;

  let copy = [...countryData];

  copy = copy.filter((country) => { return country.name.common.toString().toLowerCase().indexOf(search.toLowerCase()) > -1 })

  console.log(copy)

  setFilteredList(copy);
}

countryData.sort((a, b) => (a.name.common < b.name.common) ? 1 : -1)

  return (
    <Row>
      <Col>
      <Form.Control type="text" placeholder="Ex: United States of America" onKeyUp={filterBySearch}></Form.Control>
      <CardContainer countryData={filteredList ? filteredList : countryData} />
      </Col>
    </Row>

  )
};

export default SearchInput;