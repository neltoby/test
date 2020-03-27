import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from './Header'
import Side from './Side'
import Main from './Main'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'rgba(128,128,128,0.1)',
    },
}))

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Grid container spacing={2}>
                <Side />
                <Main />
            </Grid>
            
        </div>
    );
};

export default Home;