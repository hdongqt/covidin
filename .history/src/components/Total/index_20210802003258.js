import { Grid,TableBody, TableCell, Table,TableRow,TableContainer, TableHead } from '@material-ui/core'
import React from 'react'

export default function Total() {
    return (
     <div>
 <Grid container>
   <Grid item sm={12} xs={12}>
   <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tổng số ca mắc</TableCell>
            <TableCell align="right">Đang điều trị&nbsp;(g)</TableCell>
            <TableCell align="right">Đã chữa Khỏi&nbsp;(g)</TableCell>
            <TableCell align="right">Đã chết</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
              <TableCell align="right">dsdjsnd</TableCell>
              <TableCell align="right">mdmdksmd</TableCell>
              <TableCell align="right">sssasa</TableCell>
              <TableCell align="right">einsjsjs</TableCell>
         </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
             </Grid>
         </Grid>
     </div>
    )
}
