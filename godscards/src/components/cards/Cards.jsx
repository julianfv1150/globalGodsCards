import React from "react";
import Gods from "../../data/gods.json";
import Card from "../card/Card";
import style from "./Cards.module.css";

const Cards = () => {
    
    return(
        <div className={style.grilla}>
            {Gods.map(({id, Nombre, Pertenencia, path}) => {
                return (
                    <Card 
                        id={id}
                        key={id} 
                        nombre={Nombre} 
                        pert={Pertenencia} 
                        path={path}/>
                    );
                })
            }
        </div>
        )
}

export default Cards;