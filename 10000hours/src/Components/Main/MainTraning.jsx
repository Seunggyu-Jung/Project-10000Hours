import React from 'react'
import { useState } from 'react';
import Modal from '../Modal/Modal';
import "./MainTraining.css";
import logo from "./logo.png";

export default function MainTraning() {
    // const  [modalShow, setModalShow] = useState(true);

    // function modalClose(){
    //     setModalShow(false);
    // }

    // function modalStart(){
    //     return (
    //     <Modal modalClose = {modalClose}>
    //     <h2>화이팅!!</h2>
    //     <p> 당신의 꿈을 응원합니다!</p>
    //     <img src={logo} alt="" />
    //   </Modal>
    //     )
    // }
  return (
    <>
        <button className='training' >훈련하러 가기 GO!GO!</button>
        
        <button className='share'>공유하기</button>
    </>
  )
}
