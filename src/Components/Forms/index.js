import React, { Fragment } from "react"

//Core material Ui
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//Css
import "../Css/index.css"

//Function global
import { setNumber } from "../../Global/Function"


function Forms({ fields, getData, fieldValue }) {

    /* Funcion para obtener los eventos de los campos
    @data -> object, informacion de los campos
    @value -> string, valor de los campos
    */
    const changesField = (data, value) => {
        //Formateamos los textos para ponerlos en mayuscula
        if (data.type === "text") {
            value = value.toUpperCase()
        }
        //Parseamos los numeros
        if (data.type === "number") {
            value = setNumber(value)
        }
        //Retornamos los valores de los eventos de los campos
        getData(data.field, value)
    }

    return (
        <Grid container spacing={3}>
            {fields?.map((item, key) => {
                switch (item.type) {
                    case "text":
                    case "number":
                        return (
                            <Grid item xs={6} key={key}>
                                <TextField className={"widthFull"} label={item.label} variant="outlined" onChange={(event) => changesField(item, event.target.value)} value={fieldValue[item.field]} />
                                {fieldValue[item.field + "Error"] &&
                                    <span>{fieldValue[item.field + "Error"]}</span>
                                }
                            </Grid>
                        )
                    case "select":
                        return (
                            <Grid item xs={6} key={key}>
                                <FormControl variant="outlined" className={"widthFull"}>
                                    <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                                    <Select
                                        className={"widthFull"}
                                        value={fieldValue[item.field]}
                                        onChange={(event) => changesField(item, event.target.value)}
                                        label={item.label} >
                                        {item.options.map((itemSelect, keyForm) => {
                                            return (
                                                <MenuItem value={itemSelect.value} key={keyForm}>{itemSelect.label}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                    {fieldValue[item.field + "Error"] &&
                                        <span>{fieldValue[item.field + "Error"]}</span>
                                    }
                                </FormControl>

                            </Grid>
                        )
                }
            })}
        </Grid>
    )
}
export default Forms