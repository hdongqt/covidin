import './App.css';
import Highlight from './components/Highlight';
import CountrySelector from './components/CountrySelector';
import Summary from './components/Summary';
import Total from './components/Total';
import { useEffect,useState } from 'react';

import {getDetail,getProvince} from './apis';
function App() {
  const [province, setProvince] = useState([]);
  const [selectedProvinceId, setSelectedProvinceId] = useState('');
  const [report, setReport] = useState([]);
 const [total, setTotal] = useState({});

  useEffect(() => {
    getProvince().then((res) => {
      const { data } = res;
      setProvince(data.key)
      setSelectedProvinceId('bắc-giang');
    })
  }, []);


  useEffect(() => {
    getDetail().then((res) => {
      const {infected,deceased,recovered,treated} = res.data;
      setTotal({infected,deceased,recovered,treated})
    });
  }, []);

  const handelOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  // useEffect(() => {
  //   if(selectedCountryId && countries){
  //     const {Slug} = countries.find(
  //       (country) => country.ISO2.toLowerCase() === selectedCountryId
  //     );
  //     getReportByCountry(Slug)
  //     .then((res) => {
  //       res.data.pop();
  //       setReport(res.data);
  //     });
  //   }
  // },[countries,selectedCountryId]);

  return (
    <>
    <Total total={total} />
    <CountrySelector countries={[]} value={selectedCountryId} handelOnChange={handelOnChange}/>
   <Highlight report={report}/>
   <Summary />
    </>
  );
}

export default App;
