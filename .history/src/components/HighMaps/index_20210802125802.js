

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
      name: 'Số ca',
      joinBy: ['hc-key', 'key'],
    },
  ],
};
export default function HighMaps({detail}) {
  // console.log("de",detail)

  const [map, setMap] = useState({});
  const [options, setOptions] = useState({});
  const [list,setList] = useState([]);
  useEffect(() => {
  import(`@highcharts/map-collection/countries/vn/vn-all.geo.json`)
  .then(res=>setMap(res))
  }, []);


   const handelerTotalValue = (key) =>{
      if(key && detail.length > 0){
        console.log(key.toLowerCase());
       const s= detail.find(item=>{
          const regex = /-/ig;
          const name = item.provinceName.replace(regex, ' ');
          console.log(name)
          return name === key.toLowerCase()
        })
      }
      return 22;
   }

   useEffect(() => {
   if(map && Object.keys(map).length && detail) {
    //  console.log(map.features)
    const data = map.features.map((feature,index)=>({
      key: feature.properties['hc-key'],
      value: handelerTotalValue(feature.properties['name'])
    }))
    setOptions({
      ...initOptions,
      series : [{
        ...initOptions.series[0],
        mapData: map,
        data: data
      }]
    })
   }
  }, [map])

  return (
    <HighchartsReact
    highcharts={Highcharts}
    options={cloneDeep(options)}
    constructorType={'mapChart'}
  />
  )
}















// import React, { useEffect, useRef, useState } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import highchartsMap from 'highcharts/modules/map';
// import { cloneDeep } from 'lodash';

// // Load Highcharts modules
// highchartsMap(Highcharts);

// const initOptions = {
//   chart: {
//     height: '500',
//   },
//   title: {
//     text: null,
//   },
//   mapNavigation: {
//     enabled: true,
//   },
//   colorAxis: {
//     min: 0,
//     stops: [
//       [0.2, '#FFC4AA'],
//       [0.4, '#FF8A66'],
//       [0.6, '#FF392B'],
//       [0.8, '#B71525'],
//       [1, '	#7A0826'],
//     ],
//   },
//   legend: {
//     layout: 'vertical',
//     align: 'right',
//     verticalAlign: 'bottom',
//   },
//   series: [
//     {
//       name: 'Dân số',
//       joinBy: ['hc-key', 'key'],
//     },
//   ],
// };

//   return (
//     <HighchartsReact
//       highcharts={Highcharts}
//       options={{}}
//       constructorType={'mapChart'}
//       ref={chartRef}
//     />
//   );
// };

// HighMaps.defaultProps = {
//   mapData: {},
// };

// export default React.memo(HighMaps);