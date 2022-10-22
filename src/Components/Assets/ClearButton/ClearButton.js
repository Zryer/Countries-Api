import Button from 'react-bootstrap/Button';

const ClearButton = () => {
  return (
    <Button onClick={sessionStorage.clear()} variant="danger" style={{ marginTop: "1rem", marginLeft: "1rem" }}>
      Clear
      </Button>
  )
}

export default ClearButton;