import './App.css';
import Highlight from './components/Highlight';
import CountrySelector from './components/CountrySelector';
import Summary from './components/Summary';
import { useEffect,useState } from 'react';

import {getCountries} from './apis';
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res;
      setCountries(countries);
      setSelectedCountryId('vn');
    });
  }, []);

  const handleOnChange = React.useCallback((e) => {
    setSelectedCountryId(e.target.value);
  }, []);

  useEffect(() => {
    if (selectedCountryId) {
      const selectedCountry = countries.find(
        (country) => country.ISO2 === selectedCountryId.toUpperCase()
      );
      getReportByCountry(selectedCountry.Slug).then((res) => {
        console.log('getReportByCountry', { res });
        // remove last item = current date
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [selectedCountryId, countries]);

  return (
    <>
  <CountrySelector countries={countries}/>
   <Highlight />
   <Summary />
    </>
  );
}

export default App;
