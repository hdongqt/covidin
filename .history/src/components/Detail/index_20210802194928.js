import React from 'react';
import { Grid } from '@material-ui/core';
import DetailCard from './DetailCard';

export default function Highlight({ report }) {
    const data = report  ? report : {};
    const summary = [
      {
        title: 'Tổng số ca',
        count: data.tongso,
        type: 'sum'
      },
        {
            title: 'Số ca khỏi',
            count: data.socakhoi,
            type: 'treated'
        },
        {
            title: 'Số ca tử vong',
            count: data.socatuvong,
            type: 'deceased'
        }
    ]
  return (
    <Grid container spacing={3}>
     {
       summary.map((item,index)=><DetailCard key={index} title={item.title} count={item.count >0 ? item.count : 0} type={item.type} />)
     }
    </Grid>
  );
}