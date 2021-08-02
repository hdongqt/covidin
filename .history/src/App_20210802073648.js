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
      setProvince(data.key)
      setSelectedProvinceId('79');
    })
  }, []);


  useEffect(() => {
    getDetail().then((res) => {
      const {infected,deceased,recovered,treated,detail} = res.data;
      setTotal({infected,deceased,recovered,treated})
      setDetail(detail)
    });
  }, []);

  const handelOnChange = (e) => {
    setSelectedProvinceId(e.target.value);
  };

  useEffect(() => {
    console.log(selectedProvinceId)
    if(selectedProvinceId && province){
      const info = province.find(item=>item['hec-key'] == selectedProvinceId);
      
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
   <Highlight detail={[]}/>
   <Summary />
    </>
  );
}

export default App;
