import React, {useState} from 'react';
import CheckboxItem from "../../UI/checkbox/CheckboxItem";
import classes from "./firstRow.module.scss"
import {Box, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

const FirstRow = (props) => {
    //этот типа props, но если не нужны props, то можно просто изменит значения
    const CheckboxSpec = {id: "1checkboxID", name: "1checkbox", label:"firstRowCheckbox"}
    const [selectValue, setSelectValue] = useState('')
    const handleChange = (event) => {
        setSelectValue(event.target.value);
    };

    return (
        <Box
            className={classes.first_row_div}
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

            <TextField className={classes.first_row_inputs} size="small" id="firstRow1input" label="1placeholder" variant="outlined"/>
            <TextField className={classes.first_row_inputs} size="small" id="firstRow2input" label="2placeholder" variant="outlined" />
            <TextField className={classes.first_row_inputs} size="small" id="firstRow3input" label="3placeholder" variant="outlined" />

            <FormControl size={"small"} sx={{minWidth:"120px", my:"10px", ml:"32px;"}} className={classes.first_row_select}>
                <InputLabel id="demo-simple-select-label">select</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectValue}
                    label="select"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twentysfvdfvdf</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <TextField className={classes.first_row_inputs} size="small" id="firstRow4input" label="4placeholder" variant="outlined" sx={{width:"100px"}}/>

        </Box>
    );
};

export default FirstRow;