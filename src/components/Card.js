import React from "react";
import api from "./utils/Api";

//style={{backgroundImage: `url(${props.link})`}}
function Card(props) {
console.log('likes'+props.likes)
 return (
 <li className="element">
         <button className="element__trash"></button>
         <button className="button-image">
           <img className="element__picture" src={props.link}/>
         </button>
         <div className="element__label">
           <h2 className="element__title">{props.name}</h2>
           <div className="element__like">
             <button className="element__button-like" type="button"></button>
             <span className="element__like-sum">{props.likes}</span>
           </div>
         </div>
       </li>
       )

}

export default Card;
