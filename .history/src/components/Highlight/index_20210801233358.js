import React from 'react';
import { Grid } from '@material-ui/core';
import HighlightCard from './HighlightCard';

export default function Highlight({ report }) {
    // console.log(report)
    const data = report.length > 0 ? report[report.length - 1] : [];
    // console.log(data)
    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Số ca khỏi',
            count: data.Recovered,
            type: 'recoverd'
        },
        {
            title: 'Số ca tử vong',
            count: data.Deaths,
            type: 'death'
        }
    ]
  return (
    <Grid container spacing={3}>
      {/* {report.map((data) => (
        <Grid item sm={4} xs={12}>
          <HighlightCard
            title={data.title}
            count={data.count}
            type={data.type}
          />
        </Grid>
      ))} */}
    </Grid>
  );
}