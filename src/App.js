import './App.css';
import freeCodeCamp from './img/freecodecamp-logo.png'
import Button from './components/Button.jsx';
import Screen from './components/Screen.jsx'
import ButtonClear from './components/ButtonClear.jsx'
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

const [input, setInput] = useState('')

const addInput = val => {
  setInput(input + val);
};

const ClearInput = () => {
  setInput('')
}

const calculateResult = () => {
  if(input){
    setInput(evaluate(input));
  }
  else{
    alert('Please type correct values to calculate.')
  }
}

  return (
    <div className='App'>
      <div className='logo-container'>
        <img
          className='img-logo'
          src={freeCodeCamp}
          alt='FreeCodeCamp Logo'
        ></img>
      </div>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='fila'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button handleClick={addInput}>/</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={calculateResult}>=</Button>
        </div>
        <div className='fila'>
          <ButtonClear handleClick={ClearInput}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
