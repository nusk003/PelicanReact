import React,{useState} from 'react'
import {AppBar, TaskList, AddTaskModal} from '../../components/organisms'
import {connect} from 'react-redux'
import { getTasks } from '../../redux/actions';


const Home = (props) => {

    const [openAddTask,setOpenAddTask] = useState(false)
    const {getTasks} = props

    React.useEffect(()=>{
        getTasks()
    },[])

    return(
        <div>
            <AddTaskModal open = {openAddTask} onClose = {()=>setOpenAddTask(false)} />
            <AppBar/>
            <TaskList onAddTaskPress = {()=>setOpenAddTask(true)} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks : ()=>dispatch(getTasks())
    }
}

export default connect(null,mapDispatchToProps)(Home)