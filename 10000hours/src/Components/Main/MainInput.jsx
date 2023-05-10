import React from 'react'
import "./MainInput.css";
import { useState } from 'react';
import Finger from './Finger.png';


export default function MainInput({ addData }) {

    const [job, setJob] = useState("");
    const [time, setTime] = useState("");

    function send(event){
        event.preventDefault();

        const formData = {
            job : job,
            time: time
        }

            addData(formData);
        }
  return (
    <>
    <form>
    <h2>나는 <input type="text" value={job} onChange={(event) => setJob(event.target.value)}  placeholder='예) 프로그래밍' /> 전문가가 될 것이다.</h2>
    <h2>그래서 앞으로 매일 하루에 <input type="text" value={time} onChange={(event) => setTime(event.target.value)} placeholder='예) 5시간' /> 시간씩 훈련할 것이다.</h2>

    <button onClick={send}>나는 며칠 동안 훈련을 해야 1만 시간이 될까? <img className='finger' src={Finger} alt="" /></button>
    
    </form>
    </>
    
    
  )
}
