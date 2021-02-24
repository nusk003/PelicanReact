import React from 'react'
import { Card, CardContent, Typography, Badge } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { Row } from '../../atoms';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { STANDARD_MARGIN } from '../../settings';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    control: {
      marginRight: theme.spacing(1),
    }
  }));

export default () => {

    const classes = useStyles();

    return(
        <Card>
            <CardContent>
                <Row>
                    <VerifiedUserIcon color = "secondary" className = {classes.control} />
                    <div>
                        <Typography variant = "h6" >Complete the Exam</Typography>
                        <Typography variant = "subtitle2" >You have to complete this</Typography>
                        <Row>
                            <AccessTimeIcon className = {classes.control} style = {{fontSize : 15}} />
                            <Typography variant = "body2" >1 day more</Typography>
                        </Row>
                    </div>
                </Row>

            </CardContent>
        </Card>
    )
}