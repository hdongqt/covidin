import React from 'react'
import { FormControl,FormHelperText,InputLabel,NativeSelect} from '@material-ui/core'

export default function CountrySelector({value,handelOnChange,province}) {
  // console.log(countries)
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
          province.length > 0 && province.map(({ Country, ISO2 }) => (
            <option key={ISO2} value={ISO2.toLowerCase()}>
            {Country}
           </option>
        ))
        }
        </NativeSelect>
        <FormHelperText>Chọn thành phố</FormHelperText>
      </FormControl>
    )
}
