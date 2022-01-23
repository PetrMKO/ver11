import React, {useState} from 'react';
import CheckboxItem from "../../UI/checkbox/CheckboxItem";
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

            <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
                size={"small"}
                sx={{ml: 4}}
            >
                <ToggleButton value="first">
                    Первый
                </ToggleButton>
                <ToggleButton value="second">
                    Второй
                </ToggleButton>
                <ToggleButton value="third">
                    Третий
                </ToggleButton>
                <ToggleButton value="fourth">
                    Четвертый
                </ToggleButton>
            </ToggleButtonGroup>

            <FormControl size={"small"} sx={{minWidth:"120px", my:"10px", ml:"32px;"}} className={classes.third_row_select}>
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

        </Box>
    );
};

export default ThirdRow;