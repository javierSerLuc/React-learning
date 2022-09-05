import React from 'react'
import Proptypes from "prop-types";

export const TercerComponente = (/* props */ {datos}) => {
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            {/* <li>Altura: {props.datos.altura}</li>
            <li>Sexo: {props.datos.sexo}</li> */}
            <li>Alutra: {datos.altura}</li>
            <li>Sexo: {datos.sexo}</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
    datos: Proptypes.object.isRequired
}
TercerComponente.defaultProps = {
    datos : {altura:2,sexo:"now"}
}
