import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'


import './App.css';

function App() {
  const muCounter = useSelector(state => state.muCount)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
      Counter: { muCounter }
      {isLogged ? <h3>Valuable Information should see</h3> : ''}
      <button onClick={() => dispatch(increment(5))}>+</button>      
      <button onClick={() => dispatch(decrement())}>-</button>
      </header>
    </div>
  );
}

export default App;
