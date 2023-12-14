import logo from './logo.svg';
import './css/main.css';
import { useState } from 'react';
import $ from 'jquery'
import { stat } from './data/data';
import { swingx } from './data/x';
function App() {
  const[inin,setInin]=useState(1)
  const[mymy,setMymy]=useState(0)
  const[juck,setJuck]=useState(0)
  const[runn,setRunn]=useState(0)
  const[outs,setOuts]=useState(0)
  const wing=()=>{
    let rdnb=Math.floor(Math.random()*7)
    $('.comp').fadeIn(0).delay(2000).fadeOut(0)
    $('.ttxt').html(`
        ${stat[rdnb].text}
        <br>
        <img src=${stat[rdnb].mage}>
    `)
    if (rdnb==0) {
      // 0.홈런(점수=러너+1,러너=0)
      let pt=mymy+runn+1
      setMymy(pt)
      setRunn(0)
    }
    if (rdnb==1) {
      // 1.페어(러너++,러너=4?(점수++,러너=3))
      let rn=runn+1
      setRunn(rn)
      if (runn==3) {
        let pt=mymy+1
        setMymy(pt)
        setRunn(3)
      }
    }
    if (rdnb==2) {
      // 2.외뜬(아웃++,러너=3?(점수++,러너--))
      let ou=outs+1
      setOuts(ou)
      if (runn==3&&outs<3) {
        let pt=mymy+1
        setMymy(pt)
        setRunn(2)
      }
    }
    if (rdnb==3) {
      // 3.내뜬(아웃++)
      let ou=outs+1
      setOuts(ou)
    }
    if (rdnb==4) {
      // 4.땅볼(
        // 	러너=0?(아웃++)
        // 	러너=1(병살)?(아웃+2,러너--)
        // 	러너=2(병살)?(아웃+2,러너--)
        // 	러너=3(홈 투구)?(아웃++)
        // )
      if (runn==0||runn==3) {
        let ou=outs+1
        setOuts(ou)
      }
      if (runn==1) {
        let ou=outs+2
        setOuts(ou)
        setRunn(0)
      }
      if (runn==2) {
        let ou=outs+2
        setOuts(ou)
        setRunn(1)
      }
    }
    if (rdnb==5) {
      // 5.삼진(아웃++)
      let ou=outs+1
        setOuts(ou)
    }
    // 6.파울(유지)-no need coding
  }
  const nono=()=>{
    let rdnb=Math.floor(Math.random()*3)
    $('.comp').fadeIn(0).delay(2000).fadeOut(0)
    $('.ttxt').html(`
        ${swingx[rdnb].text}
        <br>
        <img src=${swingx[rdnb].mage}>
    `)
    if (rdnb==0) {
      // 0.삼진(아웃++)
      let ou=outs+1
        setOuts(ou)
    }
    if (rdnb==1) {
      // 1.死球(러너++)
      let rb=runn+1
      setRunn(rb)
      if (runn==3) {
        let pt=mymy+1
        setMymy(pt)
        setRunn(3)
      }
    }
    if (rdnb==2) {
      // 2.볼넷(러너++)
      let rs=runn+1
      setRunn(rs)
      if (runn==3) {
        let pt=mymy+1
        setMymy(pt)
        setRunn(3)
      }
    }
  }
  // console.log(runn)
  if (runn==0) {
    $('.pan1').css({backgroundColor:'white'})
    $('.pan2').css({backgroundColor:'white'})
    $('.pan3').css({backgroundColor:'white'})
  }
  if (runn==1) {
    $('.pan1').css({backgroundColor:'yellow'})
    $('.pan2').css({backgroundColor:'white'})
    $('.pan3').css({backgroundColor:'white'})
  }
  if (runn==2) {
    $('.pan1').css({backgroundColor:'yellow'})
    $('.pan2').css({backgroundColor:'yellow'})
    $('.pan3').css({backgroundColor:'white'})
  }
  if (runn==3) {
    $('.pan1').css({backgroundColor:'yellow'})
    $('.pan2').css({backgroundColor:'yellow'})
    $('.pan3').css({backgroundColor:'yellow'})
  }
  if (outs>2) {
    if (inin<9) {
      let enem=juck+Math.floor(Math.random()*3)
      setJuck(enem)
    }
    if (inin==9&&mymy>juck&&juck%2==0) {
      // console.log('o')
      let enem=juck*1.5
      setJuck(enem)
    }
    if (inin==9&&mymy==juck) {
      // console.log('o')
      let enem=juck+Math.floor(Math.random()*2)
      setJuck(enem)
    }
    let ii=inin+1
    setInin(ii)
    setRunn(0)
    setOuts(0)
    // console.log(juck)
  }
  if (inin==10) {
    // if (juck>mymy) {
      setTimeout(() => {
        $('.stdu').html(`
            <p>GAME SET.<br>MY TEAM ${mymy} : ${juck} ENEMY.</p>
            <br><br>
            <div style="outline: 1px solid black;width: 80%;height: 10vh;display: flex;justify-content: center;align-items: center;transform: translateX(12%);bottom: 20vh;position: absolute;" onclick="location.reload()">RESET</div>
        `).css({textAlign:'center'}).find('p').css({position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'})
      }, 2000);
    // }
    // console.log(juck)
  }
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
          <span className='oo'>{outs} out</span>
        </div>
        <img src='https://media.istockphoto.com/id/165960042/vector/baseball-stadium.jpg?s=612x612&w=0&k=20&c=kbbIVGYSxrY15WEvbR-zqcGR2-vPI_qdkTo0U4Dh27Q=' className='back'></img>
        <div className='txt1' onClick={()=>wing()}>SWING</div>
        <div className='txt2' onClick={()=>nono()}>NO SWING</div>
      </div>
    </>
  );
}

export default App;
