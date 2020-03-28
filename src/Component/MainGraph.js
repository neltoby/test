import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  } from 'recharts';
  import { IconContext } from 'react-icons';
  import { MdExpandMore } from 'react-icons/md'
  import { FiChevronRight } from 'react-icons/fi'
  import { FiChevronLeft } from 'react-icons/fi'
  import {useSelector, useDispatch} from "react-redux";
import { increase} from '../actions'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GraphDetail from './GraphDetail'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        margin: '2rem 0',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItem: 'center',
        },
        
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        padding: '1rem 0 1rem 1rem',
        fontWeight: 'bold',
    },
    nbody: {
        padding: '1rem 0',
    },
    bodyBold: {
        fontWeight: 'bold',
        fontSize: '1rem' ,
        textOverflow: 'ellipsis',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        },
    },
    dateChecker: {
        width: '97%',
        border: '1px solid #ddd',
        padding: '0.4rem',
        borderRadius: '4px',
        fontWeight: '500',
        marginTop: '1rem',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            textOverflow: 'ellipsis',
            fontSize: '0.7rem',
        },
    },
    left: {
        border: '1px solid #ddd',
        width: '95%',
        marginTop: 0,
        [theme.breakpoints.down('md')]: {
            width: '70%',
        },
    },
    right: {
        border: '1px solid #ddd',
        width: '95%',
        marginTop: 0,
        [theme.breakpoints.down('md')]: {
            width: '70%',
        },
    },
    graphDetails: {
        padding: '1rem 2rem',
        [theme.breakpoints.down('md')]: {
            padding: '1rem',
        },
    }
}))

const MainGraph = () => {
    const classes = useStyles();
    let date = new Date()
    let day = date.getDate()
    let mon = date.getMonth()
    let cyr = date.getFullYear()
    let mons = ['Jan','Feb','Mar','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const store = useSelector(state => state);
	const dispatch = useDispatch();
	const graphInfo = store.currentData.alldata.graphInfo;
	const data = store.currentData.alldata.data;
	const dateRange = store.currentData.dateRange;
	const yr = store.currentData.year;
    return (
        <>
            <Paper className={classes.root} elevation={3} >
                <IconContext.Provider value={{ style: { verticalAlign: 'middle', color: ' #aaa'} }}>
                    <Grid container className={classes.container}>
                        <Grid item sm={8} xs={12} >
                            <Grid container className={classes.row}>
                                <Grid item xs={5} className={classes.body}>
                                <Typography variant="h6" className={classes.bodyBold}>
                                    {`Today: ${day}, ${mons[mon]} ${cyr}`}
                                </Typography>
                                </Grid>
                                <Grid item container xs={7} className={classes.nbody}>
                                    <Grid item xs={6} >
                                        <Typography variant="caption" className={classes.dateChecker}>
                                            {dateRange} {yr} <MdExpandMore />
                                        </Typography>
                                    
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button  
                                            className={classes.right}
                                            onClick={() => dispatch(increase())}
                                        >
                                            <FiChevronRight />
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button 
                                            className={classes.left}
                                            onClick={() => dispatch(increase())}
                                        >
                                            <FiChevronLeft />
                                        </Button>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>  
                            <Grid container >
                                <ResponsiveContainer width='100%' height={400}>
                                    <AreaChart				    
                                        data={data}
                                        margin={{
                                            top: 10, right: 30, left: 0, bottom: 0,
                                        }}
                                        >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                            </Grid>                     
                        </Grid>
                        <Grid item sm={4} xs={12} className={classes.graphDetails}>
                            {graphInfo.map((item,i) => {
                                if(i === 0){
                                    return <><GraphDetail item={item} key={i} classname={true} /><Divider /></>
                                }else{
                                    return <GraphDetail item={item} key={i} />
                                }
                                
                            })}
                        </Grid>
                    </Grid>
                </IconContext.Provider>
            </Paper>
        </>
    );
};

export default MainGraph;