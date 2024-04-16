import React, { useState } from 'react'
import {HeaderPortion} from './components/HeaderPortion'
import { TodoContainer } from './components/TodoContainer'
import { TimingPortion } from './components/TimingPortion'
import './App.css'
function App() {
  
  return (
    <>
      <div className=' bg-slate-700 text-white min-h-screen'>
        <HeaderPortion></HeaderPortion>
        <TimingPortion></TimingPortion>
        <TodoContainer></TodoContainer>
      </div>
      
      
    </>
  )
}

export default App
