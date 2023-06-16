import React from "react";
import "./Course.css";

export default function Course(props) {
    let { strDrink, strDrinkThumb, idDrink} = props;
    return (
        <>
                <div className="card-new">
                    <img src={strDrinkThumb} alt="Loading" />
                    <div>
                        <a class="heading">Drink Name: </a>
                        <a class="content">{strDrink}</a>
                    </div>
                    <div>
                        <a class="heading">Drink ID: </a>
                        <a class="content">{idDrink}</a>
                    </div>
                    <button id="btn">BUY</button>
                </div>
        </>
    );
}