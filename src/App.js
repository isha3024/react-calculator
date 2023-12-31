import React, {useState} from "react";
import './index.css';

const App = () => {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clear = () => {
        setResult('');
    }

    const backspace = () => {
        setResult(result.slice(0, result.length - 1));
    }

    const calculate = () => {
        try{
            setResult(eval(result));
        }
        catch(err){
            setResult("Invalid Input");
        }
    }
    return (
        <>
            <div className="container">
                <form action="#" method="post">
                    <input type="text" value={result} readOnly/>
                </form>
                <div className="keypad">
                    <button className="highlight" onClick={clear} id="clear">Clear</button>
                    <button className="highlight" onClick={backspace} id="backspace">C</button>
                    <button name='/' className="highlight" onClick={handleClick}>&divide;</button>
                    <button name='7' onClick={handleClick}>7</button>
                    <button name='8' onClick={handleClick}>8</button>
                    <button name='9' onClick={handleClick}>9</button>
                    <button name='*' className="highlight" onClick={handleClick}>&times;</button>
                    <button name='4' onClick={handleClick}>4</button>
                    <button name='5' onClick={handleClick}>5</button>
                    <button name='6' onClick={handleClick}>6</button>
                    <button name='-' className="highlight" onClick={handleClick}>&minus;</button>
                    <button name='1' onClick={handleClick}>1</button>
                    <button name='2' onClick={handleClick}>2</button>
                    <button name='3' onClick={handleClick}>3</button>
                    <button name='+' className="highlight" onClick={handleClick}>&#43;</button>
                    <button name='0' onClick={handleClick}>0</button>
                    <button name='.' onClick={handleClick}>&#8226;</button>
                    <button className="highlight" onClick={calculate} id="result">&#x3d;</button>
                </div>
            </div>
        </>
    )
}

export default App;