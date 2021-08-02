import { Grid,TableBody, TableCell, Table,TableRow,TableContainer, TableHead } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
 tableCell: {
    color : 000,
    fontSize: 19
  }
}));

export default function Total({total}) {
  const styles = useStyles();
    return (
     <div>
 <Grid container>
   <Grid item sm={12} xs={12}>
   <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCell}>Tổng số ca mắc</TableCell>
            <TableCell className={styles.tableCell}>Đang điều trị</TableCell>
            <TableCell className={styles.tableCell}>Đã chữa Khỏi</TableCell>
            <TableCell className={styles.tableCell}>Tử vong</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
              <TableCell>{total.infected}</TableCell>
              <TableCell>{total.treated}</TableCell>
              <TableCell>{total.recovered}</TableCell>
              <TableCell>{total.deceased}</TableCell>
         </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
             </Grid>
         </Grid>
     </div>
    )
}
