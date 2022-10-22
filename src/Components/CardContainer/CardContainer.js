import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CountryCard from '../CountryCard/CountryCard';

const CardContainer = ({ countryData }) => {

    let listCardData = "";
    const singleCardData = countryData[0];
    const objectKeys = Object.keys(countryData);
    const newList = [...objectKeys];

    const newer = () => {
        newList.forEach(item => {return item})
    }

    const saveCountryData = (value) => {
        console.log(value)
        window.sessionStorage.setItem(`${countryData[value].name.common}`, JSON.stringify(countryData[value]))
    }

    if (countryData.length > 1 && objectKeys !== undefined) {
        listCardData = countryData.map(() => <Col key={newer()} xs={12} md={4} lg={3} style={{ marginTop: "1rem"}}><CountryCard objectKey={[...objectKeys]} countryData={countryData[objectKeys.pop()]} saveCountry={saveCountryData} /></Col>)
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