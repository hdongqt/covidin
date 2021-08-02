import React from 'react'
import { FormControl,FormHelperText,InputLabel,NativeSelect, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const hec='hec-key';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: `${theme.spacing(3)}px 0`,
    minWidth: 120,
  },
}));
export default function CountrySelector({value,handelOnChange,province}) {
  const classes = useStyles();
    return (
      <>
      <Typography variant="h5" component="h5">Thông tin từng tỉnh thành phố: </Typography>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="" shrink>Việt Nam</InputLabel>
        <NativeSelect
        value ={value}
        onChange={handelOnChange}
        inputProps = {{
            name: 'country',
            id: 'country-selector'
        }}>
           {
          province.length > 0 && province.map((item,index) =>
          {
         return <option key={index} value={item[hec]}>
            {item.name}
           </option>
         }
        )
        }
        </NativeSelect>
        <FormHelperText>Chọn tỉnh / Thành phố</FormHelperText>
      </FormControl>
      </>
    )
}
