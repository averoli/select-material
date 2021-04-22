import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import {useState} from "react";
import countryList from "country-list";

const SelectCreate = ({}) =>{

    const [countryNames, setCountryNames] = useState(()=>countryList.getNames())

    console.log(countryNames)

    return(
        <FormControl>
        <InputLabel>Country</InputLabel>
            <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                // value={personName}
                // onChange={handleChange}
                input={<Input />}
                // renderValue={(selected) => (
                //     <div className={classes.chips}>
                //         {selected.map((value) => (
                //             <Chip key={value} label={value} className={classes.chip} />
                //         ))}
                //     </div>
                // )}
                // MenuProps={MenuProps}
            >
                {/*{countryNames.map((country) => (*/}
                {/*    <MenuItem key={country} value={country} >*/}
                {/*        {country}*/}
                {/*    </MenuItem>*/}
                {/*))}*/}
            </Select>
        </FormControl>
    )
}

export default SelectCreate