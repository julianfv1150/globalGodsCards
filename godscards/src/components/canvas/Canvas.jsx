import React from "react";
import style from "./Canvas.module.css";
//import fondo from "../../images/canva.png";

const Canvas = () => {
    return(
        <div className={style.container}>
            <div></div>
            <div className={style.canvas}>
                    <div className={style.shadow}>
                        <div className={style.cit}>
                            <div >
                                <div className={style.shadowSimple}>
                                    <blockquote>
                                    <center>
                                    <q>
                                    En los reinos de la mitología, donde los destinos entrelazan sus hilos con las estrellas, 
                                    los dioses emergen como arquitectos del universo, forjadores de realidades insondables. 
                                    En cada pincelada celestial, tejieron el tapiz de la existencia con hilos de luz y sombra, 
                                    esculpiendo maravillas con la danza de sus poderes eternos.
                                    </q>
                                    </center>
                                    </blockquote>
                                </div>
                                <div className={style.shadowSimple}>
                                    <p>
                                    Elige un reino del menú que se encuentra en la parte superior para conocerlos..
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div></div>
        </div>
    );
};

export default Canvas;