import Button from 'react-bootstrap/Button';

const SearchButton = ({ countrySearch }) => {
  return (
    <Button onClick={countrySearch} variant="success" style={{ marginTop: "1rem" }}>
      Search
    </Button>
  )
}

export default SearchButton;