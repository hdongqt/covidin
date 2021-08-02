

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
      [0.1, '#FFC4AA'],
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
       console.log(item.provinceName)
     })
   if(map && Object.keys(map).length > 0) {
      const data = map.features.map((feature,index)=>{
        let flug;
          if(feature.properties['name']){
            const check = feature.properties['name'].toLowerCase().replace(" ","-")
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