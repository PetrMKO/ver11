import React from 'react';
import classes from "./checkboxItem.module.scss"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxItem = (props) => {
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