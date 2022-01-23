import React from 'react';
import CheckboxItem from "../checkbox/CheckboxItem";
import classes from "./checkboxArray.module.scss"
import {Box, Button} from "@mui/material";
const CheckboxArray = (props) => {
    return (
        <Box
            className={classes.checkbox__block}
            component="div"
            >
            <div className={classes.checkbox__block_header}>
                <h4>{props.boxSpec.h2}</h4>
            </div>

            <div style={{width:`${170*Math.ceil(props.boxArray.length/8)}px`}} className={classes.checkbox_wrapper}>
                {props.boxArray.map(checkbox =>
                    <CheckboxItem spec={checkbox} key={checkbox.id}/>
                )}

            </div>

            <Button variant="contained" size="small" sx={{
                color: '#FFFFFF',
                backgroundColor: '#F16722',
                boxShadow:'none',
                mt: '22px',
                px: '20px'
            }}>Добавить свой параметр</Button>
        </Box>
    );
};

export default CheckboxArray;