import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PrivateScreen.css";

import InfoBox from "../infobox/InfoBox";
import Map from "../map/Map";
import Table from "../table/Table";
import { sortData, prettyPrintStat } from "../utils/utils";
import LineGraph from "../linegraph/LineGraph";
import "leaflet/dist/leaflet.css";
import {
  Card,
  CardContent,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import News from "../news/NewsPage";

const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            ///map through the coutries
            name: country.country, // United Kingdom, United States
            value: country.countryInfo.iso2, // UK, USA, FRA
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    
    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/jhucsse" &&
          "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //storing all the data from the country response used to display data in cards
        setCountryInfo(data);

        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };
  console.log("CountryInfo >>> ", countryInfo); //show all info on a specific countries when triggered

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div className="app">
      <div className="app__left">
        {privateData}
        {/* Dropdown  */}
        <div className="app__header">
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{[country.name]}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Info boxes */}

        <div className="app__stats">
          {/* Info box title = "Coronavirus case" */}
          <InfoBox
            isRed
            active={casesType === "cases"}
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
          />

          {/* Info box title = "Coronavirus recoveries" */}
          <InfoBox
            active={casesType === "recovered"}
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={prettyPrintStat(countryInfo.recovered)}
          />

          {/* Info box title = "Coronavirus deaths" //The prettyprintStat is for adding the (+) from utils */}
          <InfoBox
            isRed
            active={casesType === "deaths"}
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={prettyPrintStat(countryInfo.deaths)}
          />

          {/* Info box title = "Coronavirus vaccination " for later addition */}
        </div>

        {/* Geo Navigation Map */}
        <Map
          casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
        {/* Voice control News reader   */}
        <News />
      </div>
      <Card className="app__right">
        <CardContent>
          {/* Table */}
          <h3>Live cases by country</h3>
          <Table countries={tableData} />
          {/* Graph */}
          <h3>Worldwide new {casesType}</h3>
          <LineGraph casesType={casesType} />
        </CardContent> 
      </Card>
    </div>
  );
};

export default PrivateScreen;
