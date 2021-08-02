import React from 'react';
import { Grid } from '@material-ui/core';
import DetailCard from './DetailCard';

export default function Highlight({ report }) {
    const data = report  ? report : {};
    console.log(data)
    const summary = [
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
       summary.map(item=><DetailCard title={item.title} count={item.count} type={item.type} />)
     }
    </Grid>
  );
}