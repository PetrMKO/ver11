import React, {useState} from 'react';
import CheckboxItem from "../UI/checkbox/CheckboxItem";
import classes from "./secondRow.module.scss"
import {Box, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

const SecondRow = (props) => {
    //этот типа props, но если не нужны props, то можно просто изменит значения
    const CheckboxSpec = {id: "2checkboxID", name: "2checkbox", label:"secondRowCheckbox"}

    return (
        <Box
            className={classes.second_row_div}
            component="form"
            sx={{
                '& .MuiTextField-root': { ml: 4, maxWidth:"150px", minWidth:"44px"},
            }}
            noValidate
            autoComplete="off"
        >
            <CheckboxItem spec={CheckboxSpec}/>
            <TextField className={classes.second_row_inputs} size="small" id="secondRow1input" label="1placeholder" variant="outlined"/>
            <TextField className={classes.second_row_inputs} size="small" id="secondRow2input" label="2placeholder" variant="outlined" />

        </Box>
    );
};

export default SecondRow;