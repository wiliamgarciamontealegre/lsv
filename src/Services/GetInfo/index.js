import Http from "../Http"

export const getInfoApi = (number, type) => Http.post("https://api.misdatos.com.co/api/co/consultarNombres", {documentType: type.toString(), documentNumber: number.toString()})