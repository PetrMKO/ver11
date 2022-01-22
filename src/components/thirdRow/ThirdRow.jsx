import React, {useState} from 'react';
import CheckboxItem from "../UI/checkbox/CheckboxItem";
import classes from "./thirdRow.module.scss"
import {Box, FormControl, InputLabel, MenuItem, Select, ToggleButton, ToggleButtonGroup} from "@mui/material";

const ThirdRow = (props) => {
    //этот типа props, но если не нужны props, то можно просто изменит значения
    const CheckboxSpec = {id: "3checkboxID", name: "2checkbox", label:"thirdRowCheckbox"}

    const [selectValue, setSelectValue] = useState('')
    const handleChange = (event) => {
        setSelectValue(event.target.value);
    };

    const [formats, setFormats] = useState(() => []);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <Box
            className={classes.third_row_div}
            component="form"
            sx={{
                '& .MuiTextField-root': { ml: 4, maxWidth:"150px", minWidth:"44px"},
            }}
            noValidate
            autoComplete="off"
        >
            <CheckboxItem spec={CheckboxSpec}/>
            <FormControl size={"small"} sx={{minWidth:"120px", ml:4}} className={classes.first_row_select}>
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

            <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
                size="small"
                sx={{ml: 4}}
            >
                <ToggleButton value="first">
                    Перый
                </ToggleButton>
                <ToggleButton value="second">
                    Вторй
                </ToggleButton>
                <ToggleButton value="third">
                    Третий
                </ToggleButton>
                <ToggleButton value="fourth">
                    Четвертое
                </ToggleButton>
            </ToggleButtonGroup>

        </Box>
    );
};

export default ThirdRow;