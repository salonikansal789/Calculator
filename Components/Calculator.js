import React, { useState } from "react";

function Calculator(){
const [result,setResult]=useState("");
const handleClick=(e)=>{
    setResult(result.concat((e.target.name)));
}
const clear=()=>{
setResult(" ")
}
const backspace=()=>{
setResult(result.slice(0,result.length-1));
}
const calculate=()=>{
    setResult(eval(result));
}
    return(
        <div>
           <h1 className="heading_txt">Calculator App</h1>
           <div className="container">
                <form>
                    <input type="text" value={result}></input>
                </form>
                <div className="keypad">
                    <button onClick={clear} id="clear">Clear</button>
                    <button onClick={backspace} id="backspace">C</button>
                    <button  name="/" onClick={handleClick} class="light_color">&divide;</button>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button  name="*" onClick={handleClick} class="light_color">&times;</button>
                    <button  name="4" onClick={handleClick}>4</button>
                    <button  name="3" onClick={handleClick}>5</button>
                    <button  name="2" onClick={handleClick}>6</button>
                    <button  name="-" onClick={handleClick} class="light_color">&ndash;</button>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button name="+" onClick={handleClick} class="light_color">+</button>
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="." onClick={handleClick}>.</button>
                    <button name="=" onClick={calculate} id="result">=</button>
                </div>
           </div>
        </div>
    )
}

export default Calculator;