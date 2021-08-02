import { Grid,Card,Typography,CardContent } from '@material-ui/core'
import React from 'react'

export default function Total() {
    return (
     <div>
 <Grid container>
   <Grid item sm={12} xs={12}>
   <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tổng số ca mắc</TableCell>
            <TableCell align="right">Đang điều trị</TableCell>
            <TableCell align="right">Đã chữa Khỏi</TableCell>
            <TableCell align="right">Đã chết</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
             </Grid>
         </Grid>
     </div>
    )
}
