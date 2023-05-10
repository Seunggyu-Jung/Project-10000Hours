import React from 'react'
import Up from './Dot/up.png'
import Down from './Dot/down.png'
import "./HeaderText.css"

export default function HeaderText() {
  return (
    <div className='headerText'>
        <img src={Up} alt="" />
        <p><strong>1만 시간의 법칙</strong>은<br/>어떤 분야의 전문가가 되기 위해서는<br/>최소한 1만 시간의 훈련이 필요하다는 법칙이다.</p>
        <img src={Down} alt="" />
      </div>
        
    
    
    
  )
}
