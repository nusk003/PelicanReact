import React from 'react'
import { Task } from '../../molecules';
import { Grid, Button } from '@material-ui/core';
import { STANDARD_MARGIN } from '../../settings';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    
    control: {
      padding: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(2),
        marginBottom : 0
    }
  }));

export default (props) => {

    const classes = useStyles();
    const {onAddTaskPress} = props

    return(
        <div>
            <Button onClick = {onAddTaskPress} color = "primary" className = {classes.button} variant = "contained" startIcon = {<AddIcon/>} >
                ADD TASK
            </Button>
            <Grid className = {classes.control} spacing = {2} container >
                <Grid item md = {3} xs={12}>
                    <Task/>
                </Grid>
                <Grid item md = {3} xs={12}>
                    <Task/>
                </Grid>
            </Grid>
        </div>
    )
}