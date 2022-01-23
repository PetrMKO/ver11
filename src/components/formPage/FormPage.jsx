import React from "react";
import CheckboxArray from "../UI/checkboxArray/CheckboxArray";
import FirstRow from "../rows/firstRow/FirstRow";
import SecondRow from "../rows/secondRow/SecondRow";
import ThirdRow from "../rows/thirdRow/ThirdRow";
import classes from './FormPage.module.scss'
import FourthRow from "../rows/ fourthrow/FourthRow";

const FormPage = (props) => {

    const headers = ["1 заголовок", "2 заголовок"]
    const checkboxes = ([
        {id: "A1", name: "NAme", label:"Первый чекбокс"},
        {id: "A2", name: "Name2", label:"2 чекбокс"},
        {id: "A3", name: "name3", label:"4 чекбокс"},
        {id: "A4", name: "NAme", label:"5 чекбокс"},
        {id: "A5", name: "Name2", label:"6 чекбокс"},
        {id: "A6", name: "name3", label:"7 чекбокс"},
        {id: "A7", name: "NAme", label:"8 чекбокс"},
        {id: "A8", name: "Name2", label:"9 чекбокс"},
        {id: "A9", name: "name3", label:"10 чекбокс"},
        {id: "A10", name: "NAme", label:"11 чекбокс"},
        {id: "A11", name: "Name2", label:"12 чекбокс"},
        {id: "A12", name: "name3", label:"13 чекбокс"},
        {id: "A13", name: "NAme", label:"14 чекбокс"},
        {id: "A14", name: "Name2", label:"15 чекбокс"},
        {id: "A15", name: "name3", label:"16 чекбокс"},
        {id: "A16", name: "NAme", label:"17 чекбокс"},
        {id: "A17", name: "Name2", label:"18 чекбокс"},
    ])

    const checkboxBlocSpecs = {h2: "Заголовок второго уровня"}


    return (
        <div className={classes.formPageDiv}>
            <div className={classes.header_div}>
                <h2>{headers[0]}</h2>
            </div>
            <FirstRow/>
            <SecondRow/>
            <ThirdRow/>
            <FourthRow/>

            <div className={classes.header_div}>
                <h2>{headers[1]}</h2>
            </div>

            <CheckboxArray boxSpec={checkboxBlocSpecs} boxArray={checkboxes}/>

            <div className={classes.double_checkBoxArray_div}>
                <CheckboxArray boxSpec={checkboxBlocSpecs} boxArray={checkboxes}/>
                <CheckboxArray boxSpec={checkboxBlocSpecs} boxArray={checkboxes}/>
            </div>

            <CheckboxArray boxSpec={checkboxBlocSpecs} boxArray={checkboxes}/>
        </div>
    )
};

export default FormPage;