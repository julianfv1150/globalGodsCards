import React from "react";
import style from "./NavBar.module.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className={style.bar}>
            <Link to="/" className={style.a}>
                <p className={style.menu}>HOME</p>
            </Link>
            <Link to="/griegos" className={style.a}>
                <p className={style.menu}>GRIEGOS</p>
            </Link>
            <Link to="/nordicos"className={style.a}>
                <p className={style.menu}>NORDICOS</p>
            </Link>
            <Link to="/egipcios"className={style.a}>
                <p className={style.menu}>EGIPCIOS</p>
            </Link>
            <Link to="/hindues"className={style.a}>
                <p className={style.menu}>HINDUES</p>
            </Link>
            <Link to="/chinos"className={style.a}>
                <p className={style.menu}>CHINOS</p>
            </Link>
            <Link to="/aztecas"className={style.a}>
                <p className={style.menu}>AZTECAS</p>
            </Link>
            <Link to="/mazo"className={style.a}>
                <p className={style.menu}>MAZO</p>
            </Link>
            
        </div>
    );
}

export default NavBar;