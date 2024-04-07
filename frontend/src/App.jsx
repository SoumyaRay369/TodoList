import React, { useState } from 'react'
import {HeaderPortion} from './components/HeaderPortion'
import { TodoContainer } from './components/TodoContainer'
import './App.css'
function App() {
  
  return (
    <>
      <div className='bg-white dark:bg-slate-700 dark:text-white min-h-screen'>
        <HeaderPortion></HeaderPortion>
        <TodoContainer></TodoContainer>
      </div>
      
      
    </>
  )
}

export default App