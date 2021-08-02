import axios from 'axios';
export const getCountries = () =>
 axios.get('https://api.covid19api.com/countries');

 export const getReportByCountry = (country) =>
  axios.get(
    `https://api.covid19api.com/dayone/country/${country}`
  );

// export const getDetail =() =>
// axios.get('https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST?fbclid=IwAR0HsRp6-Mp3OzvsbruqqGBjWhKPPqrw-1neaOYqtvTqtT26SrtiiA4xUPA');