import React from "react";
import style from './r.css';


  
const Recipe = ({title,calories,image}) =>{
    return(
       
        <div className="card">
        <div className={style.recipe}>
            <img className={style.image} src={image} alt=""/>
            <div className="container">
            <h2 style={{color : "black"}}>{title}</h2>
           
              
           <h4>Calories : {calories}</h4>
  
            </div>
  
        </div>
        </div>
   
    );
  
}
export default Recipe;






