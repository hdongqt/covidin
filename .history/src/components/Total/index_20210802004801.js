import { Grid,TableBody, TableCell, Table,TableRow,TableContainer, TableHead } from '@material-ui/core'
import React from 'react'

export default function Total({total}) {
    return (
     <div>
 <Grid container>
   <Grid item sm={12} xs={12}>
   <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tổng số ca mắc</TableCell>
            <TableCell>Đang điều trị</TableCell>
            <TableCell>Đã chữa Khỏi</TableCell>
            <TableCell>Đã chết</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
              <TableCell>{total.infected}</TableCell>
              <TableCell>{}</TableCell>
              <TableCell>sssasa</TableCell>
              <TableCell>einsjsjs</TableCell>
         </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
             </Grid>
         </Grid>
     </div>
    )
}
