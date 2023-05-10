import React from 'react'
import "./MainResult.css"

export default function MainResult({ datas }) {
  
  return (
    
    <section>
      {datas.map((data) => {
        return (
         <>
          <h2>당신은 <strong className='name'>{data.job}</strong>전문가가 되기 위해서</h2>
          <h2>대략 <strong className='name'>{parseInt(10000 / data.time)}</strong>일 이상 훈련하셔야 합니다!</h2>
          <button className='training' >훈련하러 가기 GO!GO!</button>
          <button className='share'>공유하기</button>
         </>
        )
      })
      
      }
    </section>
  )
}
