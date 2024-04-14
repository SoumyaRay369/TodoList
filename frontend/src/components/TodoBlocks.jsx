import { useEffect, useState } from "react"

export const TodoBlocks = ({text, taskId}) => {
    const [showOptions, setShowOptions] = useState(false)
    const [commit, setCommit] = useState('Commit')
    const [deleteStatus, setDeleteStatus] = useState('Delete')
    const renderOptions = () => {
        return (
            <>  
                <div className="flex justify-center gap-x-3 mb-1">
                    
                    <button onClick={handleDelete} className={`bg-slate-900 px-2 py-2 rounded-md cursor-pointer font-semibold text-sm md:text-md ${deleteStatus === 'Delete' ? '' : 'hidden'}`}>Delete</button>
                </div>
                
            </>
        )
    }
    const handleClick = () => {
        setShowOptions(!showOptions)
        
    }
 
    const handleDelete = () => {
        
        fetch('http://localhost:3000/deleteParticularTodo', {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ taskId: taskId })
        }).then(() => {
           
            setDeleteStatus(deleteStatus === 'Delete' ? "Undo Delete" : "Delete")
        });
    }
    return (
        <>
            <div onClick={handleClick} className={`bg-slate-900 text-sm md:text-lg font-semibold rounded-md px-2 py-2 mb-2 cursor-pointer ${deleteStatus === 'Delete' ? '' : 'hidden'} `}>
                {text}
            </div>
            {showOptions && renderOptions()}
        </>
    )
}