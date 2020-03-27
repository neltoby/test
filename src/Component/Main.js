import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GraphSpace from './GraphSpace'
import MainGraph from './MainGraph'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        
    },
    rootSize: {
        marginLeft: '1rem',
        width: 'calc(100% -3rem)',
        marginRight: '2rem',
        [theme.breakpoints.up('md')]: {
            marginLeft: 0,
            width: '100%',
        },
    },
}))

const Main = () => {
    const classes = useStyles();
    return (
        <>
            <Grid item md={9} className={classes.root}>
                <div className={classes.rootSize}>
                    <GraphSpace />
                    <MainGraph />
                </div>
            </Grid>
        </>
    );
};

export default Main;