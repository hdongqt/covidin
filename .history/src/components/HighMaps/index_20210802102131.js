

import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMap from 'highcharts/modules/map';
const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

export default function HighMaps() {
  return (
    <HighchartsReact
    highcharts={Highcharts}
    options={options}
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