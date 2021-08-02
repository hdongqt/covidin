

import React, { useEffect,useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMap from 'highcharts/modules/map';
import cloneDeep from 'lodash.clonedeep';

highchartsMap(Highcharts);
const initOptions = {
  chart: {
    height: '500',
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.2, '#FFC4AA'],
      [0.4, '#FF8A66'],
      [0.6, '#FF392B'],
      [0.8, '#B71525'],
      [1, '	#7A0826'],
    ],
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'bottom',
  },
  series: [
    {
      mapData: {},
      name: 'Số ca khỏi bệnh',
      joinBy: ['hc-key', 'key'],
    },
  ],
};
const handlerData = (data) =>{
  let fix = data.toLowerCase().replace(" ","-");
  switch (fix) {
  case 'qu?ng-ninh':
      return 'quảng-ninh'
  case 'khánh-hòa':
      return 'khánh-hòa'
  case 'ti?n-giang':
      return 'tiền-giang'
  case 'bà-r?a - v?ng tàu':
      return 'bà-rịa-vũng-tàu'
  case 'bình-thu?n':
      return 'bình-thuận'
  case 'h?-chí minh city':
      return 'hồ-chí-minh city'
  case 'b?n-tre':
      return 'bến-tre'
  case 'sóc-tr?ng':
      return 'soc-trăng'
  case 'phú-th?':
      return 'phú-thọ'
  case 'yên-bái':
      return 'yên-bái'
  case 'h?i-d??ng':
      return 'hải-dương'
  case 'b?c-ninh':
      return 'bắc-ninh'
  case '??ng-b?ng sông h?ng':
      return 'đồng-bằng-sông-hồng'
  case 'ninh-bình':
      return 'ninh-bình'
  case 'hà-nam':
      return 'hà-nam'
  case 'hòa-bình':
      return 'hòa-binh'
  case 'v?nh-phúc':
      return 'vĩnh-phúc'
  case 'ha-noi':
      return 'hà-nội'
  case 'b?c-giang':
      return 'bắc-giang'
  case 'thái-bình':
      return 'thái-bình'
  case 'lâm-??ng':
      return 'lâm-đồng'
  case 'bình-ph??c':
      return 'bình-phước'
  case 'phú-yên':
      return 'phú-yên'
  case 'bình-??nh':
      return 'bình-định'
  case 'gia-lai':
      return 'gia-lai'
  case 'qu?ng-ngãi':
      return 'quảng-ngãi'
  case '?ông-nam b?':
      return 'đông nam bộ'
  case 'ð?ng-tháp':
      return 'đồng-tháp'
  case 'long-an':
      return 'long-an'
  case 'h?i-phòng':
      return 'hải-phòng'
  case 'hau-giang':
      return 'hậu-giang'
  case 'b?c-liêu':
      return 'bạc-liêu'
  case 'v?nh-long':
      return 'vĩnh-long'
  case 'tây-ninh':
      return 'tây-ninh'
  case 'thái-nguyên':
      return ''
  case 'lai-chau':
      return ''
  case 'son-la':
      return ''
  case 'hà-giang':
      return ''
  case 'nam-??nh':
      return ''
  case 'ha-tinh':
      return ''
  case 'ngh?-an':
      return ''
  case 'qu?ng-bình':
      return ''
  case 'dak-lak':
      return ''
  case 'ninh-thu?n':
      return 'ninh-thuận'
  case '??k-nông':
      return ''
  case 'kon-tum':
      return ''
  case 'quàng-nam':
      return ''
  case 'qu?ng-tr?':
      return 'quảng-trị'
  case 'th?a-thiên - hu?':
      return 'thừa-thiên-huế'
  case '?à-n?ng':
      return 'đà-nẵng'
  case 'an-giang':
      return 'an-giang'
  case 'cà-mau':
      return 'cà-mau'
  case 'trà-vinh':
      return 'trà-vinh'
  case 'cao-b?ng':
      return 'cao-bằng'
  case 'kiên-giang':
      return 'kiên-giang'
  case 'lào-cai':
      return 'lào-cai'
  case '?i?n-biên':
      return ''
  case 'l?ng-s?n':
      return 'lạng-sơn'
  case 'thanh-hóa':
      return 'thanh-hóa'
  case '?ông-b?c':
      return 'đông-bắc'
  case 'tuyên-quang':
      return 'truyên-quang'
  case 'bình-d??ng':
      return 'bình-dương'
  case 'can-tho':
      return 'cần-thơ'
  default:
   return fix
  }
}

export default function HighMaps({detail}) {
  const [map, setMap] = useState({});
  const [options, setOptions] = useState({});
  const [list,setList] = useState([]);
  useEffect(() => {
  import(`@highcharts/map-collection/countries/vn/vn-all.geo.json`)
  .then(res=>{
    setMap(res)
  })
  }, []);

  useEffect(() => {
    setList(detail)
    }, [detail]);

   useEffect(() => {
     list.forEach(item=>{
      //  console.log(item.provinceName)
     })
   if(map && Object.keys(map).length > 0) {
      const data = map.features.map((feature,index)=>{
        let flug;
          if(feature.properties['name']){
            const check =handlerData(feature.properties['name']);  
            const found = list.find(item=>{
            const name = item['provinceName'];
              return check.includes(name) === true;
              })
            flug = found ? found['socakhoi'] : 0
          }
      return{key: feature.properties['hc-key'],  value: flug}
  })
    setOptions({
      ...initOptions,
      series : [{
        ...initOptions.series[0],
        mapData: map,
        data: data
      }]
    })
   }
  }, [map,list])

  return (
    <HighchartsReact
    highcharts={Highcharts}
    options={cloneDeep(options)}
    constructorType={'mapChart'}
  />
  )
}