import './App.css';
import Highlight from './components/Highlight';
import CountrySelector from './components/CountrySelector';
import Summary from './components/Summary';
import { useEffect } from 'react';

import {getCountries} from './apis';
function App() {
  const [countries, setCountries] = useState([]);

 useEffect(()=>{
  getCountries()
    .then(res=>{
      setCountries(res.data)
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
