import React,{createContext,useState,useContext} from 'react';


const TaskContext=createContext()


export const useTaskContext = () =>{
    return useContext(TaskContext)
}


export const TaskProvider =({children}) =>{

    const [selectedtask,setSelectedTask]=useState({})
    const [selectedSection,setSelectedSection]=useState('')
    const [active,setActive]=useState(false)

const handleTaskSection=(newSection)=>{
    setSelectedSection(newSection)
}
    const handleTaskClick = (newTask)=>{
        setSelectedTask(newTask)
    }

    const handleActiveState=()=>{
        setActive(true)
    }

    
return (
    <TaskContext.Provider value={{selectedtask,selectedSection,active,handleTaskClick,handleTaskSection,handleActiveState,setActive,setSelectedTask}}>
        {children}
    </TaskContext.Provider>
)
}