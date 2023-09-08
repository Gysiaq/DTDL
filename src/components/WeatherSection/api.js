import { API_KEYS } from "../../APIKey";
export const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

const geoKey = API_KEYS.GEO_LOCATION_KEY;
export const geoApiOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": geoKey,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
