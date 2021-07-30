export const fieldForm = [
    {
        type: "text",
        label: "Nombres",
        field: "nameUser",
        maxLength: 30
    },
    {
        type: "text",
        label: "Apellidos",
        field: "lastnameUser",
        maxLength: 30
    },
    {
        type: "select",
        label: "Tipo de documento",
        field: "typeDocument",
        valueDefault: "CC",
        options: [
            {
                label: "Cédula de ciudadanía",
                value: "CC"
            },
            {
                label: "Cédula de extranjería,",
                value: "CE"
            },
            {
                label: "Permiso especial de permanencia",
                value: "PEP"
            },
            {
                label: "Tarjeta de identidad",
                value: "TI"
            },
            {
                label: "Registro civil de nacimiento",
                value: "RC"
            },
            {
                label: "Pasaporte",
                value: "PA"
            }
        ]
    },
    {
        type: "number",
        label: "Numero de documento",
        field: "numberDocument",
        maxLength: 30
    },

]