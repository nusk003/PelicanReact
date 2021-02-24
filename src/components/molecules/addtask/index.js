import React from 'react'
import { TextField, Paper, FormControl, FormGroup, FormLabel, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';
import { addTask } from '../../../redux/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  control: {
    marginBottom : theme.spacing(2)
  },
  progress : {
      display : 'flex',
      justifyContent : 'center'
  }
}));

const AddTaskForm = (props) => {

    const {loading,addTask,callback} = props
    const classes = useStyles()
    const [date, setSelectedDate] = React.useState(new Date());
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const onSubmit = e => {
        e.preventDefault()

        const payload = {
            date,title,description
        }

        addTask(payload,callback,callback)
    }

    return(
        <form onSubmit = {onSubmit} >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <FormGroup className = {classes.control}  >
                <FormControl>
                    <TextField onChange = {(e)=>setTitle(e.target.value)} required variant = "outlined" placeholder = "Title" label = "Title" />
                </FormControl>
            </FormGroup>
            <FormGroup  >
                <FormControl>
                    <TextField onChange = {(e)=>setDescription(e.target.value)} required variant = "outlined" placeholder = "Description" label = "Description" />
                </FormControl>
            </FormGroup>
            <FormGroup className = {classes.control} >
                <FormControl>
                    <KeyboardDatePicker
                        required
                        placeholder = "Date" 
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </FormControl>
            </FormGroup>
            <FormControl className = {classes.control} >
                {loading ?
                    <CircularProgress className = {classes.progress} color = "secondary" />
                :
                    <Button type = "submit" variant = "contained" color = "primary" >Add Task</Button>
                }
            </FormControl>
            </MuiPickersUtilsProvider>
        </form>
    )
}

const mapStateToProps = state => {

    return {
        loading : state.addTask.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask : (payload,success,fail) => dispatch(addTask(payload,success,fail))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTaskForm)