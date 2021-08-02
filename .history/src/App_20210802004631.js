import './App.css';
import Highlight from './components/Highlight';
import CountrySelector from './components/CountrySelector';
import Summary from './components/Summary';
import Total from './components/Total';
import { useEffect,useState } from 'react';

import {getCountries,getDetail,getReportByCountry} from './apis';
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);
 const [total, setTotal] = useState({});
  useEffect(() => {
    getCountries().then((res) => {
      // const { data } = res;
      setCountries(res.data);
      setSelectedCountryId('vn');
    });
  }, []);
  useEffect(() => {
    getDetail().then((res) => {
      const {infected,deceased,recovered} = res.data;
    setTotal({infected,deceased,recovered })
    });
  }, []);

  const handelOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if(selectedCountryId){
      const {Slug} = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      getReportByCountry(Slug)
      .then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  },[countries,selectedCountryId]);

  return (
    <>
    <Total deceased={deceased} infected={infected} recovered={recovered} />
  <CountrySelector countries={countries} value={selectedCountryId} handelOnChange={handelOnChange}/>
   <Highlight report={report}/>
   <Summary />
    </>
  );
}

export default App;
