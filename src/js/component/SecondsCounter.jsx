
import React, {useEffect, useState, useRef} from "react";
//Declaracion de variables para controlar la ejecucion de la app
let initialRun = true;
let timerBtn = false;
let alarmBtn = false

const SecondsCounter = () => {

   
    
//declaracion de los estados 
    const [seg, setSeg] = useState(0);
    const inputRef = useRef(null);
    const inputRef2 = useRef(null)
    const [input, setInput] = useState(input)
    const [input2, setInput2] = useState(input2)
    let time;

//Configurando los botones de restart, pausa y seguir
    const restartBtn = ()=> {
        timerBtn = false
        setSeg(0)
    } 
    const resumeBtn = () => initialRun = true
    const stopBtn = () => initialRun = false

    
//utilizo hooks para renderizar los segundos
    useEffect( ()=>{

        time = setInterval(()=>{
           
                
//Utilizo los estados globales y los booleans anteriormente declarados para manipular la renderizacion de los segundos y las alertas
            if(initialRun === true && timerBtn === false ) {setSeg(seg+1)}
           
            if(timerBtn === true && initialRun === true){ 
                
                if(seg === 0 ){
                    setSeg(0)
                    alert("✅✅Your time's up✅✅")
                    timerBtn = false;
                    initialRun = true;
                   
            } else{setSeg(seg-1)}}

               
               
            if(input2 == seg && alarmBtn === true){
                alert("✅✅Your time's up✅✅") 
                 alarmBtn = false
            }

            if(input2 < seg && alarmBtn === true){
                alert("⚠️⚠️Your time is too low, insert a higher digit⚠️⚠️")
                alarmBtn = false  

            }

                
            setInput(inputRef.current.value)
            
            
        },1000)
//aqui estoy limpiando la cache para el que programa no se rompa despues de cierto tiempo
        return ()=> clearInterval(time)
    });
//Declaro funciones de escucha   
    function onClickFunction() {      
       if(input <= 99999999){
        alarmBtn = false;
        timerBtn = true
       setSeg(Number(input))}

       else{alert(`⚠️⚠️${input} is out of range, please insert another value ⚠️⚠️`)}
      }

      function onClickFunction2() {     
        alarmBtn = true;
        setInput2(inputRef2.current.value);
   }
      
     
    return(
             
             <div className="counterContainer   rounded border ">
            <div className="secondsContainer text-light  ">
            
                <h1 className="seconds ">
               
                    {seg}
                 </h1>
                
            </div>

            <div className="btnContainer ">
                <div>

            <button className="btn btn-danger m-2" onClick={stopBtn}><i class="fa-solid fa-pause p-2"></i></button>

            <button onClick={resumeBtn} className="btn btn-success p-2"><i class="fa-solid fa-play"></i></button>

            <button onClick={restartBtn} className="btn btn-primary m-2 p-2"><i class="fa-solid fa-rotate-right"></i></button>

            </div>

            <input ref={inputRef} min={0} max={99999999} type="number" placeholder="Enter the seconds" className="inputValue text-center p-2 m-1 rounded " />

            <button onClick={onClickFunction} className="btn btn-warning valueBtn" type="submit">Set Timer</button>

            </div>
            
            <input ref={inputRef2} min={1} max={99999999} type="number" placeholder="Enter the seconds" className="inputValue text-center p-2 m-1 rounded " />

            <button onClick={onClickFunction2} className="btn btn-warning valueBtn" type="submit">Set Alarm</button>
     
        </div>
        

    );
}

export default SecondsCounter;