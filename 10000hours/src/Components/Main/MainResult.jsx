import React from 'react'
import "./MainResult.css"

export default function MainResult({ datas }) {
  return (
    
    <section>
      {datas.map((data) => {
        return (
         <>
          <h2>당신은 {data.job}전문가가 되기 위해서</h2>
          <h2>대략 {data.time}일 이상 훈련하셔야 합니다!</h2>
         </> 
          
        )
      })

      }
    </section>
  )
}
