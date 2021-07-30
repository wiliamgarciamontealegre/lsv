import React, { useState, useEffect, Fragment } from 'react';


//Core Material Ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

//Css
import "./Css/index.css"

//Components
import Forms from "../../Components/Forms"
import Confirm from "../Confirm"

//Fields form
import { fieldForm } from "./Fields/FormLogin"


//Services
import { getInfoApi } from "../../Services/GetInfo"
import { Button } from '@material-ui/core';

//Validator
import { validateData } from "../../Global/Function"

//Alert
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);


export default function Home() {

  //Almacenamos los valores del formulario
  const [dataForm, setDataForm] = useState({})
  //Almacenamos los valores del formulario
  const [error, setError] = useState({})

  //Almacenamos los valores del formulario
  const [successApi, setsuccessApi] = useState(false)

  //Almacenamos la informacion de la alerta
  const [alert, setAlert] = useState({
    load: false,
    text: ""
  })

  //Funcion para obtener los valores del formulario
  const getDataForm = (field, value) => {
    setDataForm({ ...dataForm, [field]: value })
  }

  //Capturamos el click en el boton de buscar usuario
  const sendApi = async () => {

    //Validamos todos los campos esten completos
    const validateField = await validateData(fieldForm, dataForm);
    if (Object.keys(validateField).length > 0) {
      setError(validateField)
      return
    }
    //Si todos los campos estan llenos limpiamos el objeto de errores
    setError({})

    //Lanzamos la api para consultar la informacion
    getInfoApi(dataForm.numberDocument, dataForm.typeDocument).then(response => {
      //Obtenemos la informacion del api
      const { lastName, firstName } = response?.data?.data;

      //Validamos que los datos de respuesta del api sean iguales a los escritos por el usuario de lo contrario mostramos una alerta de erro
      if (lastName !== dataForm.lastnameUser || firstName !== dataForm.nameUser) {
        setAlert({
          load: true,
          text: "La informacion no coincide con la que escribiste"
        })
      } else {
        //Si los datos son correctos mostramos la pantalla de bienvenida
        setsuccessApi(!successApi)
      }
    }).catch(error => {
      //Si tenemos un error con el servidor mostramos una alerta
      setAlert({
        load: true,
        text: "Hemos tenido problemas intenta de nuevo"
      })
    })
  }
  //Limpiamos la consola
  useEffect(() =>{
    console.clear()
  }) 

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom className={"textCenter marginBottom"}>
        LSV-TECH
      </Typography>
      <Grid item xs={12}>
        {!successApi ?
          <Fragment>
            <Forms fields={fieldForm} getData={getDataForm} fieldValue={{ ...error, ...dataForm }} />
            <Button variant="contained" color="primary" onClick={sendApi} className={"textCenter"}>Buscar usuario</Button>
          </Fragment>
          : <Confirm info={dataForm} returnForm={setsuccessApi} />}
        {alert.load &&
          <SweetAlert
            show={alert.load}
            title="Error"
            text={alert.text}
            onConfirm={() => setAlert({ load: false })}

          />
        }

      </Grid>
    </Container>
  );
}

