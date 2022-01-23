import React from 'react';
import classes from './fourthRow.module.scss'
import CheckboxItem from "../../UI/checkbox/CheckboxItem";
import {Box, TextField} from "@mui/material";

const FourthRow = (props) => {
    const CheckboxSpec = {id: "4checkboxID", name: "4checkbox", label:"fourthRowCheckbox"}
    return (
        <Box
            className={classes.fourth_row_div}
            component="div"
            sx={{
                '& .MuiTextField-root': { ml: "32px", maxWidth:"180px", minWidth:"100px", my:"10px"},
            }}
            noValidate
            autoComplete="off"
        >

            <div className={classes.checkbox_div}>
                <CheckboxItem spec={CheckboxSpec}/>
            </div>
            <TextField className={classes.fourth_row_inputs} size="small" id="fourthRow1input" label="1placeholder" variant="outlined"/>
        </Box>
    );
};

export default FourthRow;