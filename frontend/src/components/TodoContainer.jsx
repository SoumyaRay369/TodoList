import { useState } from 'react'
import {TodoBlocks} from './TodoBlocks'


export const TodoContainer = () => {
    const [input, setInput] = useState(false)

   
    const [todosArray, setTodosArray] = useState(['Work Hard', 'Get a High Paying Job', 'Buy a Luxury / Sports Car', 'Hit the Gym', 'Pick up some oranges', 'Take them on a ride to LA', 'Live up with them']);

    const addTask = (newTask) => {
    setTodosArray(prevTodosArray => [...prevTodosArray, newTask]);
}
    const handleClick = () => {
        setInput(!input)
    }


    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <div className="flex flex-col mt-10 md:mt-20 2xl:mt-28 rounded-md bg-slate-800 overflow-y-auto h-72 md:h-96 w-1/2 px-3 py-3 hide-scrollbar">

                    {/* <TodoBlocks></TodoBlocks>
                    <TodoBlocks></TodoBlocks>
                    <TodoBlocks></TodoBlocks>
                    <TodoBlocks></TodoBlocks>
                    <TodoBlocks></TodoBlocks>
                    <TodoBlocks></TodoBlocks>
                    <TodoBlocks></TodoBlocks>
                    <TodoBlocks></TodoBlocks>
                    <TodoBlocks></TodoBlocks>
                    <TodoBlocks></TodoBlocks>
                    <TodoBlocks></TodoBlocks> */}
                        {todosArray.map(element => (
        <TodoBlocks text={element} key={element}></TodoBlocks>
    ))}
                    


                </div>
                <div>
                    <button onClick={handleClick} className={`bg-slate-900 px-2 py-2 rounded-md cursor-pointer font-semibold text-sm md:text-md mt-4`}>Create New To Do</button>
                    <div  className='flex flex-row gap-x-4'>
                    
                            <input id='newTodoText' type="text" className= {`px-5 py-5 rounded-md mt-3 mb-3 outline-none ring-2 ring-blue-600 bg-slate-900 text-white font-semibold ${input === false ? 'hidden' : ''} `}  placeholder='Enter your todo here' />
                            
                            <button onClick={() => addTask(document.getElementById('newTodoText').value)} type='submit' className={`dark:bg-slate-900 px-5 py-5 mt-3 mb-3 rounded-md cursor-pointer font-semibold text-sm md:text-md ${input === false ? ' hidden' : ''}`}>Add Task</button>
                        
                    </div>
                </div>
            </div>
            
            
        </>
    )
}