import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import style from "./componets/App.module.css"
function App(props) {
  const arr = ["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","." ];
  return(
<div className={style.calculator}>

  
<center>
   <input type="text "  />
</center>
<div className={style.btnname}>
{
  arr.map(buttonname=>{
    return <button  className={style.btn}>{buttonname}</button>
})
}
</div></div>
  )  

}

export default App
