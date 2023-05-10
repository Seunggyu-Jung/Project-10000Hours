import React from 'react'
import MainInput from './MainInput'
import MainResult from './MainResult'
import { useState } from 'react'



export default function Main() {

    const [datas, setDatas] = useState([])

    const addData = (data) => {
        setDatas([...datas, data])
    }
  return (
    <>
    <MainInput addData={addData}/>
    <MainResult datas={datas} />
    </>
  )
}
