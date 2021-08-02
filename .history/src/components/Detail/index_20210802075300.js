import React from 'react';
import { Grid } from '@material-ui/core';
import DetailCard from './DetailCard';

export default function Highlight({ report }) {
    const data = report  ? report : {};
    console.log(data)
    const summary = [
        {
            title: 'Số ca khỏi',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Số ca khỏi',
            count: data.Recovered,
            type: 'recovered'
        }
    ]
  return (
    <Grid container spacing={3}>
      <DetailCard />
      <DetailCard />
      <DetailCard />
    </Grid>
  );
}