import React from "react";
import style from "./Card.module.css";
import { useState } from "react";

const Card = (props) => {
   
    const [frame, setFrame] = useState({
        frame:"-c.png",
    });
    
    const handClicker = (event) => {
        console.log(event.target.value)
        console.log(frame.frame);
        if(event.target.value === "-c.png"){
            const selectFrame = event.target.name;
            const valueFrame = event.target.value;
            setFrame({...frame, [selectFrame] : valueFrame})
        }else{
            const selectFrame = event.target.name;
            const valueFrame = event.target.value;
            setFrame({...frame, [selectFrame] : valueFrame})
        }
    }

    let ruta =`${props.path}${frame.frame}`;
    
    return(
        <div>
            <div>
                <h1>{props.nombre}</h1>
            </div>
            <div>
                <p><small>ID: {props.id}</small></p>
                <p>Descendencia: {props.pert}</p>
            </div>
            <div className={style.frame}>
                <input type="radio" className={style.frameR} onClick={handClicker} name="frame" value="-c.png"></input>
                <input type="radio" className={style.frameL} onClick={handClicker} name="frame" value="-r.png"></input>                
            </div>
            <div>
                <img className={style.transition} src={ruta} alt={props.nombre} width="180px" height="350px"></img>
            </div>
        </div>
        );
}

export default Card;


