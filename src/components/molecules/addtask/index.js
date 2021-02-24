import React from 'react'
import { TextField, Paper, FormControl, FormGroup, FormLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  control: {
    marginBottom : theme.spacing(2)
  }
}));

export default () => {

    const classes = useStyles()
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    return(
        <form>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <FormGroup className = {classes.control}  >
                <FormControl>
                    <TextField variant = "outlined" placeholder = "Title" label = "Title" />
                </FormControl>
            </FormGroup>
            <FormGroup  >
                <FormControl>
                    <TextField variant = "outlined" placeholder = "Description" label = "Description" />
                </FormControl>
            </FormGroup>
            <FormGroup className = {classes.control} >
                <FormControl>
                    <KeyboardDatePicker
                        placeholder = "Date" 
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </FormControl>
            </FormGroup>
            <FormControl className = {classes.control} >
                <Button variant = "contained" color = "primary" >Add Task</Button>
            </FormControl>
            </MuiPickersUtilsProvider>
        </form>
    )
}