import React, {useState} from "react";
import CheckboxItem from "../components/UI/checkbox/CheckboxItem";
import CheckboxArray from "../components/UI/checkboxArray/CheckboxArray";
import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import FirstRow from "../components/firstRow/FirstRow";
import SecondRow from "../components/secondRow/SecondRow";
import ThirdRow from "../components/thirdRow/ThirdRow";

const FormPage = () => {

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
        {id: "A12", name: "name3", label:"13 чекбокс"}
    ])

    const [checkboxBlocSpecs, setBlockHeader] = useState({
        header: "Вот Как-то так заголовок",
        h2: "Заголовок второго уровня"
    })


    return (
        <div className="App">
            <FirstRow/>
            <SecondRow/>
            <ThirdRow/>
            <CheckboxArray boxSpec={checkboxBlocSpecs} boxArray={checkboxes}/>
            <CheckboxArray boxSpec={checkboxBlocSpecs} boxArray={checkboxes}/>
            <CheckboxArray boxSpec={checkboxBlocSpecs} boxArray={checkboxes}/>
        </div>
    )
};

export default FormPage;