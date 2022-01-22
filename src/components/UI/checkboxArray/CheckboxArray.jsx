import React from 'react';
import CheckboxItem from "../checkbox/CheckboxItem";
import classes from "./checkboxArray.module.scss"
import {Button} from "@mui/material";
const CheckboxArray = (props) => {
    return (
        <div className={classes.checkbox__block}>
            <div className={classes.checkbox__block_header}>
                <h2>{props.boxSpec.header}</h2>
                <h4>{props.boxSpec.h2}</h4>
            </div>

            <div className={classes.checkbox_wrapper}>
                {props.boxArray.map(checkbox =>
                    <CheckboxItem spec={checkbox} key={checkbox.id}/>
                )}

            </div>

            <Button variant="contained" size="small" sx={{
                color: '#FFFFFF',
                backgroundColor: '#F16722',
                boxShadow:'none'
            }}>Добавить свой параметр</Button>
        </div>
    );
};

export default CheckboxArray;