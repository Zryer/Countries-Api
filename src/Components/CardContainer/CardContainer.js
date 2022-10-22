import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CountryCard from '../CountryCard/CountryCard';

const CardContainer = ({ countryData }) => {

    let listCardData = "";
    const singleCardData = countryData[0];
    const objectKeys = Object.keys(countryData);
    const id = [...objectKeys];
    const newCountry = [...objectKeys];
    const keys = [...objectKeys];

    const saveCountryData = (val) => {
        console.log(val)
        if (sessionStorage.getItem(`${countryData[val].name.common}`) !== null){
            console.log("already exists")
        } else {
            console.log("added")
        window.sessionStorage.setItem(`${countryData[val].name.common}`, JSON.stringify(countryData[val]))
        }
    }

    if (countryData.length > 1 && objectKeys !== undefined) {
        listCardData = countryData.map(() => <Col key={keys.pop()} xs={12} md={4} lg={3} style={{ marginTop: "1rem"}}><CountryCard objectKey={id.pop()} countryData={countryData[newCountry.pop()]} saveCountry={saveCountryData} /></Col>)
        return (
            <Container>
                <Row>
                    {listCardData}
                </Row>
            </Container>
        )
    } else {
        return <Container><CountryCard countryData={singleCardData} saveCountry={saveCountryData} objectKey={[...objectKeys]} /></Container>
    }

}

export default CardContainer;