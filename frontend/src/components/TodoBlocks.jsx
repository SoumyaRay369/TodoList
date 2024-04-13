import { useEffect, useState } from "react"

export const TodoBlocks = ({text}) => {
    const [showOptions, setShowOptions] = useState(false)
    const [commit, setCommit] = useState('Commit')
    const [deleteStatus, setDeleteStatus] = useState('Delete')
    const renderOptions = () => {
        return (
            <>  
                <div className="flex justify-center gap-x-3 mb-1">
                    <button onClick={handleCommit} className="bg-slate-900 px-2 py-2 rounded-md cursor-pointer font-semibold text-sm md:text-md">{commit}</button>
                    <button onClick={handleDelete} className="bg-slate-900 px-2 py-2 rounded-md cursor-pointer font-semibold text-sm md:text-md">{deleteStatus}</button>
                </div>
                
            </>
        )
    }
    const handleClick = () => {
        setShowOptions(!showOptions)
        if(deleteStatus === "Delete"){

        }
    }
    const handleCommit = () => {
        setCommit(commit === 'Commit' ? 'Uncommit' : "Commit")
    }
    const handleDelete = () => {
        setDeleteStatus(deleteStatus === 'Delete' ? "Undo Delete" : "Delete")
    }
    return (
        <>
            <div onClick={handleClick} className={`bg-slate-900 text-sm md:text-lg font-semibold rounded-md px-2 py-2 mb-2 cursor-pointer ${deleteStatus === 'Delete' ? '' : 'strikethrough'} `}>
                {text}
            </div>
            {showOptions && renderOptions()}
        </>
    )
}