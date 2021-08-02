import React from 'react'
import { FormControl,FormHelperText,InputLabel,NativeSelect} from '@material-ui/core'

export default function CountrySelector({value,handelOnChange,countries}) {
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
                countries.map((country)=>{
                    return <option key={country.ISO2} value={country.ISO2.toLowerCase()}>
                        {country.Country}
                    </option>
                })
            }
        </NativeSelect>
        <FormHelperText/>
      </FormControl>
    )
}
