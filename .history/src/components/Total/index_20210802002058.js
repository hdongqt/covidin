import { Grid,Card,Typography,CardContent } from '@material-ui/core'
import React from 'react'

export default function Total() {
    return (
     <div>
 <Grid container>
   <Grid item sm={12} xs={12}>
        <Card>
        <CardContent>
        <Typography variant='h5' component='p'>
            Tổng số ca nhiễm
            </Typography>          
          <Typography variant='body' component='h2'>
            Tổng số ca nhiễm
            </Typography>
        </CardContent>
        </Card>
             </Grid>
         </Grid>
     </div>
    )
}
