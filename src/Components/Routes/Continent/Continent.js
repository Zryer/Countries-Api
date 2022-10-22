import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import SavedCard from "../../SavedCard/SavedCard";
import CardContainer from "../../CardContainer/CardContainer";
import CountryCard from "../../CountryCard/CountryCard";
import Spinner from "react-bootstrap/Spinner";
import "./Continent.css";
import SearchInput from "../../Assets/SearchInput/SearchInput";

const Continent = (setValue) => {

    const { id } = useParams();

    const [val, setVal] = useState([]);

    useEffect(() => {
        const continentSearch = async () => {
            try {
                const continentResponse = await axios.get(`https://restcountries.com/v3.1/region/${id}`);
                console.log(continentResponse.data.length)
                continentResponse.data.forEach((Country) => {
                    setVal(oldArray => [...oldArray, Country]);
                })
            } catch (error) {
                console.log("error");
                return error;
            }
        }
        continentSearch()
    }, [])

    console.log(val)
    val.sort((a, b) => (a.name.common < b.name.common) ? 1 : -1)

    return (
        val.length > 0 ? <Container><SearchInput countryData={val} /></Container> : <Container style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}><Spinner animation="border" role="status" className="continentSpinner"><span className="visually-hidden">Loading...</span></Spinner></Container>
    )
}

export default Continent