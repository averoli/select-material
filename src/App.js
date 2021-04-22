import './App.css';
import CountrySelector from "./CountrySelector";
import Grid from "@material-ui/core/Grid";
import CardEdit from "./CardEdit";
import SelectCreate from "./SelectCreate";

import countryList from 'country-list'
import {useState} from "react";

function App() {

    const [countryNames, setCountryNames] = useState(() => countryList.getNames())

    console.log(countryNames)

    return (
        <>
            <CountrySelector/>
            <Grid>
                <Grid>
                    <CardEdit
                        editSelect={
                            <SelectCreate
                                countries={countryNames}
                                // defaultSelected={investor.country}
                                // onChange={handleChangeCountryFocus}
                            />
                        }
                    />
                </Grid>
            </Grid>
        </>

    );
}

export default App;
