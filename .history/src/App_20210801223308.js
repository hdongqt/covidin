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

 useEffect(()=>{
  getCountries()
    .then(res=>{
      console.log(res)
      setCountries(res.data)
    })
 },[])

  return (
    <>
  <CountrySelector countries={countries}/>
   <Highlight />
   <Summary />
    </>
  );
}

export default App;
