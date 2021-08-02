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
  const [detail, setDetail] = useState([]);
 const [total, setTotal] = useState({});

  useEffect(() => {
    getProvince().then((res) => {
      const { data } = res;
      console.log(data.key)
      setProvince(data.key)
      setSelectedProvinceId('bắc-giang');
    })
  }, []);


  useEffect(() => {
    getDetail().then((res) => {
      const {infected,deceased,recovered,treated} = res.data;
      console.log(res.data)
      setTotal({infected,deceased,recovered,treated})
      setDetail(res.key)
    });
  }, []);

  const handelOnChange = (e) => {
    setSelectedProvinceId(e.target.value);
  };

  useEffect(() => {
    if(selectedProvinceId && province){
      // const {Slug} = countries.find(
      //   (country) => country.ISO2.toLowerCase() === selectedCountryId
      // );
      // getReportByCountry(Slug)
      // .then((res) => {
      //   res.data.pop();
      //   setReport(res.data);
      // });
    }
  },[province,selectedProvinceId]);

  return (
    <>
    <Total total={total} />
    <CountrySelector province={province} value={selectedProvinceId} handelOnChange={handelOnChange}/>
   <Highlight report={[]}/>
   <Summary />
    </>
  );
}

export default App;
