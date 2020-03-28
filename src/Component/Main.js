import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GraphSpace from './GraphSpace'
import MainGraph from './MainGraph'
import ResultHeader from './ResultHeader'
import ResultTable from './ResultTable'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,      
    },
    rootSize: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            marginRight: '2rem',
            marginLeft: '1rem',
            width: 'calc(100% - 3rem)',
            
        },
    },
}))

const Main = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container item md={9} className={classes.root}>
                <div className={classes.rootSize}>
                    <GraphSpace />
                    <MainGraph />
                    <ResultHeader />
                    <ResultTable />
                </div>
            </Grid>
        </>
    );
};

export default Main;