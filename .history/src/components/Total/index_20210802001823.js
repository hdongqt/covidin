import { Grid,Card,Typography } from '@material-ui/core'
import React from 'react'

export default function Total() {
    return (
     <div>
         <Grid container>
             <Grid item sm={12} xs={12}>
             <Card>
                  <CardContent>
        <Typography variant='body2' component='h2'>
          Tổng số ca nhiễm
        </Typography>
      </CardContent>
    </Card>
             </Grid>
         </Grid>
     </div>
    )
}
