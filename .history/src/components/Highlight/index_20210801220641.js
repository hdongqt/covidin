import { CardContent, Grid,Typography } from '@material-ui/core'
import React from 'react'

export default function Highlight() {
    return (
        <Grid container spacing={3}>
            <Grid item sm={4} xs={12} >
                <CardContent>
                <Typography component="p" variant="body2" ></Typography> 
                
                </CardContent>
            </Grid>
            <Grid item sm={4} xs={12} >
                
            </Grid>
            <Grid item sm={4} xs={12} >
                
            </Grid>
        </Grid>
    )
}
