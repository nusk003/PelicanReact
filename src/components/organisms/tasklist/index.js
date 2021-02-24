import React from 'react'
import { Task } from '../../molecules';
import { Grid, Button, CircularProgress } from '@material-ui/core';
import { STANDARD_MARGIN } from '../../settings';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import {connect} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    
    control: {
      padding: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(2),
        marginBottom : 0
    },
    progress : {
        display: 'flex',
        justifyContent : 'center',
        '& > * + *': {
          margin: theme.spacing(2),
        },
    }
  }));

const TaskList = (props) => {

    const classes = useStyles();
    const {onAddTaskPress,tasks,loading} = props

    return(
        <div>
            <Button onClick = {onAddTaskPress} color = "primary" className = {classes.button} variant = "contained" startIcon = {<AddIcon/>} >
                ADD TASK
            </Button>
            {loading ?
            <div className={classes.progress}>
                <CircularProgress color="secondary" />
            </div>
            :
            <Grid className = {classes.control} spacing = {2} container >
                {tasks.map((task,index)=>
                    <Grid key = {index} item md = {3} xs={12}>
                        <Task {...task} />
                    </Grid>
                )}
                
            </Grid>
            }
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tasks : state.getTasks.tasks,
        loading : state.getTasks.loading
    }
}

export default connect(mapStateToProps)(TaskList)

