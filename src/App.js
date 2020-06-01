import React, { useState} from 'react';
import styled from 'styled-components';
import './App.css';

const H1 = styled.h1`
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;

`;

const Buttom = styled.button`
  width: 300px;
  height: 25px;
  background-color: lightblue;
`;


function App() {
  
  const [ gorjeta, setGorjeta ] = useState(0);
  const [ conta, setConta ] = useState(0);
  const attTotalByGorjeta = (e) => {
    setGorjeta(e.target.value);
  }
  const attTotalByTotal = (e) => {
    setConta(e.target.value);
  }

  return (
  <div>
    <div className="body">
      <H1>Calculadora de Gorjeta</H1>
      <p>Qunto deu a conta?</p>
      <Input placeholder="Conta" type="number" min="0" value={conta} onChange={ attTotalByTotal } />
      <p>Qual a procentagem de gorjeta?</p>
      <Input placeholder="Gorjeta" type="number" min="0" value={gorjeta} onChange={ attTotalByGorjeta } />
      <hr/>
      {conta > 0 &&
        <div>
          <p>Sub Total: {(parseFloat(conta))}</p>
          <p>Gorjeta ({parseFloat(gorjeta)}%): {(parseFloat(conta) * parseFloat(gorjeta) / 100)}</p>
          <p>Total: {parseFloat(conta)+(parseFloat(conta) * parseFloat(gorjeta) / 100)}</p>
        </div>
      }
    </div>
  </div>
  );
}

export default App;
