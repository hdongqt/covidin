import React from 'react';
import { Grid } from '@material-ui/core';
import HighlightCard from './HighlightCard';

export default function Highlight({ report }) {
    const data = report  ? report : {};
    console.log(data)
    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Số ca khỏi',
            count: data.Recovered,
            type: 'recovered'
        },
        {
            title: 'Số ca tử vong',
            count: data.Deaths,
            type: 'death'
        }
    ]
  return (
    <Grid container spacing={3}>
      <HighlightCard />>
    </Grid>
  );
}