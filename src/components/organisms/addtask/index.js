import React from 'react'
import { AddTaskForm } from '../../molecules';
import { Modal, Dialog, DialogContent, DialogContentText } from '@material-ui/core';

export default (props) => {

    const {open,onClose} = props

    return(
        <Dialog fullWidth open = {open} onClose = {onClose} >
            <DialogContent>
                <DialogContentText>Add Task</DialogContentText>
                <AddTaskForm callback = {onClose} />
            </DialogContent>
        </Dialog>
    )
}