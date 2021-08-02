import { Grid } from '@material-ui/core'
import React from 'react'

export default function Total() {
    return (
     <div>
         <Grid container>
             <Grid item sm={12} xs={12}>
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
         </Grid>
     </div>
    )
}
