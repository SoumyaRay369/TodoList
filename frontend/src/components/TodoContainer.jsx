import { useState, useEffect } from 'react'
import {TodoBlocks} from './TodoBlocks'



export const TodoContainer = () => {
    const [input, setInput] = useState(false)
    
    const [todosArray, setTodosArray] = useState([]);
    const [count, setCount] = useState(0)
    // https://todolist-msw5.onrender.com
    useEffect(() => {
        fetch('https://todolist-msw5.onrender.com/getTodos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setTodosArray(data))
        .catch(error => console.error('Error:', error));
    }, []);
    
    useEffect(() => {
        setCount(todosArray.length + 1);
    }, [todosArray]);
    

    const d = new Date();

    const addTask = (newTask) => {
        setCount(count + 1)
        const taskObject = {
            task: newTask,
            taskId: count,
            date: d.getDate(),
            day: d.getDay() + 1,
            year: d.getFullYear(),
            month: d.getMonth() + 1
        };
        fetch('https://todolist-msw5.onrender.com/postTodo', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskObject)
        }).then(() => {
            setTodosArray(prevTodosArray => [...prevTodosArray, taskObject]);
        })
}
    const handleClick = () => {
        setInput(!input)
    }


    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <div className="flex flex-col mt-10 md:mt-20 2xl:mt-28 rounded-md bg-slate-800 overflow-y-auto h-72 md:h-96 w-3/4 md:1/2 px-3 py-3 hide-scrollbar">

                   
                    {todosArray.map(element => (
                        <TodoBlocks key={element.taskId} text={element.task} taskId={element.taskId} ></TodoBlocks>
                    ))}
                    


                </div>
                <div>
                    <button onClick={handleClick} className={`bg-slate-900 px-2 py-2 rounded-md cursor-pointer font-semibold text-sm md:text-md mt-4`}>Create New To Do</button>
                    <div  className='flex flex-row gap-x-4'>
                    
                            <input id='newTodoText' type="text" className= {`px-5 py-5 rounded-md mt-3 mb-3 outline-none ring-2 ring-blue-600 bg-slate-900 text-white font-semibold ${input === false ? 'hidden' : ''} `}  placeholder='Enter your todo here' />
                            
                            <button onClick={() => addTask(document.getElementById('newTodoText').value)} type='submit' className={`bg-slate-900 px-5 py-5 mt-3 mb-3 rounded-md cursor-pointer font-semibold text-sm md:text-md ${input === false ? ' hidden' : ''}`}>Add Task</button>
                        
                    </div>
                </div>
            </div>
            
            
        </>
    )
}