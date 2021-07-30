import { Fragment } from "react";
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function Confirm({ info, returnForm }) {

    return (
        <Fragment>
            <h3>Hola: {info.nameUser + " " + info.lastnameUser}</h3>
            <Button variant="contained" color="primary" onClick={() => returnForm(state => (!state))}>Regresar</Button>
        </Fragment>
    )
}

Confirm.propTypes = {
    info: PropTypes.object,
    returnForm: PropTypes.func,
};