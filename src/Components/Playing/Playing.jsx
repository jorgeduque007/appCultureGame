import React,{useState,useEffect} from 'react'
import GameOver from '../GameOver'
import style from './Playing.module.css'
import {Preguntas} from '../Helpers/BD.jsx'
import {Route} from 'react-router-dom'

const Playing = () => {

    const[time,setTime]=useState(20)
    const[aleatorio,setAleatorio]=useState(Math.round(Math.random()*100))
    const[clase,setClase]=useState([style.naturaleza,style.cultura,style.arte,style.deportes,style.viajes])
    const[vidas,setVidas]=useState(3)
    const[puntuacion,setPuntuacion]=useState(0)
    const[gameOver,setGameOver]=useState(null)
  

     
     useEffect(()=>{

        let cuentaAtras=setInterval(()=>{time > 0  ? setTime(time - 1) : setGameOver(window.location.href='/gameover')},1000)
         
        
        
        return()=>clearInterval(cuentaAtras)

     },[time,puntuacion])

 
     const bien=()=>{
        speechSynthesis.speak(new SpeechSynthesisUtterance('¡¡¡RESPUESTA CORRECTA!!!'))
        setAleatorio(Math.round(Math.random()*100))
        setPuntuacion(puntuacion + 1)
        setTime(20)
        
       
    
      
     }

     const mal=()=>{
        speechSynthesis.speak(new SpeechSynthesisUtterance('¡¡¡RESPUESTA INCORRECTA!!!'))
        setAleatorio(Math.round(Math.random()*100))
        setVidas(vidas >0 ? vidas - 1 : setGameOver(window.location.href='/gameover'))
        setTime(20)
      
       
       
     
            
         
    }



    
    return (
        <>
     
         
        
        {Preguntas.map(preguntando=>(
            preguntando.id===aleatorio ?
       <>
      <div className={style.countContainer}>
          <h2>Time:{time}</h2>
          <h2>Points:{puntuacion}</h2>
           <h2>Life:{vidas}</h2>
      
       </div>     
       
       <div className={style.imgContainer}>
           <div  className={preguntando.estilos==='naturaleza' ? clase[0] : 
                            preguntando.estilos==='arte'       ? clase[2] :
                            preguntando.estilos==='deportes'   ? clase[3] :
                            preguntando.estilos==='viajes'     ? clase[4] : 
                            preguntando.estilos==='cultura'    ? clase[1] : clase[4]}>
                        
            </div>
       </div>
       
       <div className={style.preguntaContainer}>
           <h3>{preguntando.pregunta}</h3>
       </div>

       <div className={style.buttonContainer}>
           <button className={style.boton} onClick={()=>preguntando.respuesta1===preguntando.solucion ? bien() : mal() }>{[preguntando.respuesta1]}</button>
           <button className={style.boton} onClick={()=>preguntando.respuesta2===preguntando.solucion ? bien() : mal()}>{[preguntando.respuesta2]}</button>
          <button className={style.boton} onClick={()=>preguntando.respuesta3===preguntando.solucion ?  bien() : mal()}>{[preguntando.respuesta3]}</button>
       </div>
        </>
        :null
       ))}
          
        </>
    )
}

export default Playing
