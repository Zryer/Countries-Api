import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchInput from '../../Assets/SearchInput/SearchInput';


const Search = ({ countryData }) => {

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