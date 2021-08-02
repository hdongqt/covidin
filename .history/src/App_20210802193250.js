import './App.css';
import Detail from './components/Detail';
import CountrySelector from './components/CountrySelector';
import Total from './components/Total';
import HighMaps from './components/HighMaps';
import { useEffect,useState } from 'react';
import {getDetail,getProvince} from './apis';
import { Typography } from '@material-ui/core';
function App() {
  const [province, setProvince] = useState([]);
  const [selectedProvinceId, setSelectedProvinceId] = useState('');
  const [detail, setDetail] = useState([]);
  const [total, setTotal] = useState({});
  const [report, setReport] = useState({});
  // const [temp,setTemp] = useState([]);
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
        const nameProvince = province.find(prov=>prov['hec-key'] === item['hc-key']);
        if(!nameProvince) return {}
        else return {
           provinceName : nameProvince.name,
           tongso: item.value,
           socakhoi: item.socakhoi,
           socatuvong: item.socatuvong,
           ['hc-key'] : item['hc-key']
        }
      })
      // console.log(list)
      setDetail(list)
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
    <Typography variant="h3" component="h3">
      Thông tin về dịch bệnh Covid
    </Typography>
    <Total total={total} />
    <CountrySelector province={province} value={selectedProvinceId} handelOnChange={handelOnChange}/>
    <Detail report={report}/>
    <HighMaps detail={detail} />
    </>
  );
}

export default App;
