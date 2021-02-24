import React,{useState} from 'react'
import {AppBar, TaskList, AddTaskModal} from '../../components/organisms'

export default () => {

    const [openAddTask,setOpenAddTask] = useState(false)

    return(
        <div>
            <AddTaskModal open = {openAddTask} onClose = {()=>setOpenAddTask(false)} />
            <AppBar/>
            <TaskList onAddTaskPress = {()=>setOpenAddTask(true)} />
        </div>
    )
}