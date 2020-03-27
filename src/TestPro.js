import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 20,
        // overflowX: 'hidden',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const TestPro = () => {
    const classes = useStyles();
    const FormRow = () => {
        return(
            <React.Fragment>
                <Grid item sm={3} xs={12}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item sm={3} xs={12}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item sm={3} xs={12}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item sm={3} xs={12}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
            </React.Fragment>
        )
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item container xs={12} spacing={3}>
                    <FormRow/>
                </Grid>
                <Grid item container xs={12} spacing={3}>
                    <FormRow/>
                </Grid>
                <Grid item container xs={12} spacing={3}>
                    <FormRow/>
                </Grid>
            </Grid>
        </div>
    );
};

export default TestPro;