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
        <p className='time'><span className='boon'>{inin}</span>inning</p>
        <b className='mtch'>MYTEAM({mymy})<br/>VS<br/>ENEMY({juck})</b>
        <img src='' className='back'></img>
        <div className='txt1' onClick={wing}>SWING</div>
        <div className='txt2' onClick={nono}>NO SWING</div>
      </div>
    </>
  );
}

export default App;
