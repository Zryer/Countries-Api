import React, { useEffect, useState } from 'react';
import Search from './Components/Routes/Search/Search';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navi from './Components/Navbar/Navbar';
import CountryPage from './Components/Routes/Country/CountryPage';
import CountryIndex from './Components/Routes/Country/CountryIndex';
import Country from './Components/Routes/Country/Country';
import axios from 'axios';
import Home from './Components/Routes/Home/Home';
import ContinentPage from './Components/Routes/Continent/ContinentPage';
import ContinentIndex from './Components/Routes/Continent/ContinentIndex';
import Continent from './Components/Routes/Continent/Continent';

const App = () => {

  const [searchValue, setSearchValue] = useState("");
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const countrySearch = async () => {
    let nameSearchString = `https://restcountries.com/v3.1/all`;

    try {
      const countryResponse = await axios.get(nameSearchString);
      console.log(countryResponse.data);
      return setCountryData(countryResponse.data);
    } catch (error) {
      console.log("There is an error");
      return error;
    }
  }
  countrySearch()
}, [])

  countryData.sort((a, b) => (a.name.common < b.name.common) ? 1 : -1)
  //Find a way to reset card container state so that it is empty after going to new tab

  return(
    <BrowserRouter>
    <Navi />
    <Routes>
      <Route path="" element={<Home countryData={countryData} searchValue={searchValue} setSearchValue={setSearchValue} />} />
      <Route path="Country" element={<CountryPage />}>
        <Route path="" element={<CountryIndex countryData={countryData} />} />
        <Route path=":id" element={<Country />} />
      </Route>
      <Route path="Continent" element={<ContinentPage />}>
        <Route path="" element={<ContinentIndex />} />
        <Route path=":id" element={<Continent />} />
      </Route>
      <Route path="Search" element={<Search countryData={countryData} searchValue={searchValue} setSearchValue={setSearchValue} />} />
    </Routes>
    </BrowserRouter>
  )
};

export default App;
