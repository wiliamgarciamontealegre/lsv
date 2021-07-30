
//Formateamos los numeros
export const setNumber = (number) =>{
    return parseInt(number.toString().replace(/[^0-9]|/g, "")) || 0;
}


/* Validamos que todos los campos sean requeridos
@data -> object, array del formulario
@state -> object, estado actual del formulario
*/
export const validateData = (data, state) =>{
    let fieldData = {}
    data.map(item =>{
        if(!state[item.field]){
            fieldData[item.field+"Error"] = "El campo no puede estar vacio"
        }
    })
    return fieldData
}
