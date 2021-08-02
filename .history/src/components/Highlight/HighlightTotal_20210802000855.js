import React from 'react';
import { CardContent, Typography, Card } from '@material-ui/core';
export default function HighlightCard({ title,count, type }) {
  const styles = useStyles({ type });
  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography variant='body2' component='p' className={styles.type}>
          {title}
        </Typography>
        <Typography variant='body2' component='span' className={styles.type}>
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
}