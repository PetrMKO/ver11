import React, {useState} from "react";
import CheckboxItem from "./components/UI/checkbox/CheckboxItem";
import CheckboxArray from "./components/UI/checkboxArray/CheckboxArray";
import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import FirstRow from "./components/firstRow/FirstRow";
import SecondRow from "./components/secondRow/SecondRow";
import ThirdRow from "./components/thirdRow/ThirdRow";
import FormPage from "./components/FormPage";


function App() {

  return (
    <div className="App">
        <FormPage/>
    </div>
  )
}

export default App;
