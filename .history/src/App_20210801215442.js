import './App.css';
import Highlight from './components/Highlight';
import CountrySelector from './components/CountrySelector';
import Summary from './components/Summary';
import { useEffect } from 'react';

import {getCountries} from './apis';
function App() {
 useEffect(()=>{
  getCountries()
    .then(res=>{
      console.log(res)
    })
 },[])

  return (
    <>
  <CountrySelector />
   <Highlight />
   <Summary />
    </>
  );
}

export default App;
