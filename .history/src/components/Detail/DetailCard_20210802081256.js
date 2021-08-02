import React from 'react';
import { CardContent, Typography, Card, makeStyles,Grid } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: (props) => {
    // console.log({ props });
    if (props.type === 'confirmed') return { borderBottom: '5px solid #F80909' };
    if (props.type === 'recovered') return { borderBottom: '5px solid #0000FF' };
    else return { borderBottom: '5px solid #000' };
  },
  title: { fontSize: 18, marginBottom: 5 },
  count: { fontWeight: 'bold', fontSize: 18 },
});

export default function DetailCard({title,count,type}) {
  const styles = useStyles({ type });
  return (
    <Grid item sm={6} xs={12}>
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
    </Grid>
  );
}