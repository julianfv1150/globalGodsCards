import React from "react";

const Card = (props) => {
    let ruta =`${props.path}-r.png`;
    return(
        <div>
            <h1>{props.nombre}</h1>
            <img src={ruta} alt={props.nombre} width={180} height={300}></img>
            <p><small>ID: {props.id}</small></p>
            <p>Descendencia: {props.pert}</p>
        </div>
        );
}

export default Card;


