import axios from 'axios';
export const getProvince = () =>
 axios.get('https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST?fbclid=IwAR0mNCF4J1qQZxmuYQoiFNByQLLOkiENx5M0w92Ryx7_21oazAlT83QVqFA');

 export const getReportByCountry = (country) =>
  axios.get(
    `https://api.covid19api.com/dayone/country/${country}`
  );

export const getDetail =() =>
axios.get('https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST?fbclid=IwAR0HsRp6-Mp3OzvsbruqqGBjWhKPPqrw-1neaOYqtvTqtT26SrtiiA4xUPA');