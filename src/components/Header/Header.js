import React from "react";
import {Link} from "react-router-dom";
import "./header.css"

function Header(props){
    return(
    <header className="header">
        <img src="./img/images.png" className="logo" alt="logo"></img>
        <nav className="inicio">
            <ul className="inicio">
            <li> <Link to ="/" className= "header-link">Home</Link></li>
            <li> <Link to ="/favoritos" className= "header-link" >Favoritos</Link></li>
            <li> <Link to ="/populars"className= "header-link">Populars</Link></li>
            <li> <Link to = "/toprated"className= "header-link">Top Rated </Link> </li>
            </ul>
        </nav> 
    </header>     
    )
}
export default Header;

