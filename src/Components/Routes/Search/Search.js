import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClearButton from '../../Assets/ClearButton/ClearButton';
import SearchButton from '../../Assets/SearchButton/SearchButton';
import SearchInput from '../../Assets/SearchInput/SearchInput';
import axios from 'axios';
import CardContainer from '../../CardContainer/CardContainer';

const Search = ({ countryData, searchValue, setSearchValue, countrySearch }) => {

// Add Search and filter to searchbar... w3 schools has a good example

  return (
    <Container>
      <Row>
        <Col xs={12}>
        <SearchInput countryData={countryData} />
        </Col>
      </Row>
    </Container>
  )
}

export default Search;