import React from 'react'
import { Card, CardContent, Typography, Badge } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { Row } from '../../atoms';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { STANDARD_MARGIN } from '../../settings';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment'
import AccessAlarms from '@material-ui/icons/AccessTime';

function getDaysRemaining(date) {
    var eventdate = moment(date);
    var todaysdate = moment();
    return eventdate.diff(todaysdate, 'days');
}

export default (props) => {

    const {title,description,date} = props
    
    const daysRemaining =  getDaysRemaining(date)
    let str = ""
    let Icon = VerifiedUserIcon
    let color = "red"

    if (daysRemaining === 0){
        str = "Today"
        Icon = VerifiedUserIcon
        color = "green"
    }
    else if (daysRemaining === 1){
        str = "1 day more"
        Icon = AccessAlarms
    }
    else if (daysRemaining > 1){

        str = daysRemaining+" days more"
        Icon = AccessAlarms
        color = "black"
    }
    else if (daysRemaining === -1){
        str = daysRemaining+" day ago"
        Icon = AccessAlarms
        color = "orange"
    }
    else{
        str = daysRemaining+" days ago"
        color = "orange"

    }

    const useStyles = makeStyles((theme) => ({
    
        control: {
          marginRight: theme.spacing(1),
        },
        icon : {
            color
        }
    }));

    const classes = useStyles();


    return(
        <Card>
            <CardContent>
                <Row>
                    <Icon color = "secondary" className = {[classes.control,classes.icon]} />
                    <div>
                        <Typography variant = "h6" >{title}</Typography>
                        <Typography variant = "subtitle2" >{description}</Typography>
                        <Row>
                            <AccessTimeIcon className = {[classes.control,classes.icon]} style = {{fontSize : 15}} />
                            <Typography className = {classes.icon} variant = "body2" >{str}</Typography>
                        </Row>
                    </div>
                </Row>

            </CardContent>
        </Card>
    )
}