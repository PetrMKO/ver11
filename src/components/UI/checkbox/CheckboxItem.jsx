import React from 'react';
import classes from "./checkboxItem.module.scss"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxItem = (props) => {
    console.log(props)
    return (
        <div className={classes.checkbox_div}>
            <FormControlLabel control={
                <Checkbox
                    sx={{
                      color: "#F16722",
                      '&.Mui-checked': {
                          color: "#F16722",
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      }
                    }}
                />
            } label={props.spec.label} />
        </div>
    );
};

export default CheckboxItem;