import React from 'react'
import { FormControl,FormHelperText,InputLabel,NativeSelect} from '@material-ui/core'

export default function CountrySelector({value,handelOnChange,countries}) {
  console.log(countries)
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
          countries.length > 0 && countries.map(({ Country, ISO2 }) => (
            
        ))
        }
        </NativeSelect>
        <FormHelperText>Chọn thành phố</FormHelperText>
      </FormControl>
    )
}
