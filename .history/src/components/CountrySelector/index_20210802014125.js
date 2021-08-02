import React from 'react'
import { FormControl,FormHelperText,InputLabel,NativeSelect} from '@material-ui/core'
const hec='hec-key';
export default function CountrySelector({value,handelOnChange,province}) {
  console.log(province)
    return (
        <FormControl>
        <InputLabel htmlFor="" shrink>Quốc gia</InputLabel>
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
            const hec = item;
            console.log(hec);
         return <option key={index} value={item.hec}>
            {item.name}
           </option>
         }
        )
        }
        </NativeSelect>
        <FormHelperText>Chọn thành phố</FormHelperText>
      </FormControl>
    )
}
