import './App.css';
import Detail from './components/Detail';
import CountrySelector from './components/CountrySelector';
import Total from './components/Total';
import HighMaps from './components/HighMaps';
import { useEffect,useState } from 'react';

import {getDetail,getProvince} from './apis';
function App() {
  const [province, setProvince] = useState([]);
  const [selectedProvinceId, setSelectedProvinceId] = useState('');
  const [detail, setDetail] = useState([]);
  const [total, setTotal] = useState({});
  const [report, setReport] = useState({});
  const [temp,setTemp] = useState([]);
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
      const list = detail.map(item=>{
        console.log(item)
        let nameProvince =province.find(prov=>prov['hec-key'] === item['hc-key'] );
        return {
          //  name : nameProvince.name,
          //  socakhoi: item.socakhoi,
          //  socatuvong: item.socatuvong,
        }
      })
      setDetail(detail)
    });
  }, [province]);

  const handelOnChange = (e) => {
    setSelectedProvinceId(e.target.value);
  };

  useEffect(() => {
    if(detail && selectedProvinceId){
      const info = detail.find(item=>item['hc-key'] === selectedProvinceId);
      setReport(info)
    }
  },[detail,selectedProvinceId]);

  return (
    <>
    <Total total={total} />
    <CountrySelector province={province} value={selectedProvinceId} handelOnChange={handelOnChange}/>
    <Detail report={report}/>
    <HighMaps detail={detail} />
    </>
  );
}

export default App;
