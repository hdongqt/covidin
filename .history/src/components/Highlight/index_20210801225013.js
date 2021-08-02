import React from 'react';
import { Grid } from '@material-ui/core';
import HighlightCard from './HighlightCard';

export default function Highlight({ report }) {
    const data = report[report.length - 1];
    const summary = [
        
    ]
  return (
    <Grid container spacing={3}>
      {report.map((data) => (
        <Grid item sm={4} xs={12}>
          <HighlightCard
            title={data.title}
            count={data.count}
            type={data.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}