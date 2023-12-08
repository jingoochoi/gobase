import logo from './logo.svg';
import './css/main.css';
import { useState } from 'react';
import $ from 'jquery'
function App() {
  const[inin,setInin]=useState(1)
  const[mymy,setMymy]=useState(0)
  const[juck,setJuck]=useState(0)
  const wing=()=>{}
  const nono=()=>{}
  return (
    <>
      <div className='jong'><div className='gtxt'></div></div>
      <div className='comp'><div className='ttxt'></div></div>
      <div className='stdu'>
        <b className='mtch'>MYTEAM({mymy})<br/>▲{inin}<br/>ENEMY({juck})</b>
        <div className='base'>
          <div className='pan1'></div>
          <div className='pan2'></div>
          <div className='pan3'></div>
        </div>
        <img src='' className='back'></img>
        <div className='txt1' onClick={wing}>SWING</div>
        <div className='txt2' onClick={nono}>NO SWING</div>
      </div>
    </>
  );
}

export default App;
