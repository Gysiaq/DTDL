import React, { useRef, useState } from "react";
import { url, geoApiOptions } from "./api";
import { AsyncPaginate } from "react-select-async-paginate";
import "./Search.css";

function Search({ onSearchChange }) {
    const [location, setLocation] = useState(null);

    async function loadOptions(inputValue) {
        const response = await fetch(
            `${url}?minPopulation=50&namePrefix=${inputValue}`,
            geoApiOptions
        );
        const result = await response.json();

        return {
            options: result.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                };
            }),
        };
    }

    const handleOnChange = (searchData) => {
        setLocation(searchData);
        onSearchChange(searchData);
        setLocation(" ");
    };

    return (
        <AsyncPaginate
            className="location-input paragraph"
            placeholder="Localization..."
            debounceTimeout={700}
            value={location}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;
