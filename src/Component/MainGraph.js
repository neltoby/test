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
import { increase, decrease} from '../actions'
import Typography from '@material-ui/core/Typography';

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
    body: {
        padding: '1rem',
    },
    bodyBold: {
        fontWeight: 'bold',
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
                <Grid container className={classes.container}>
                    <Grid item sm={8} xs={12} >
                        <Grid container >
                            <Grid item xs={6} className={classes.body}>
                            <Typography variant="h6" className={classes.bodyBold}>
                                {`Today: ${day}, ${mons[mon]} ${cyr}`}
                            </Typography>
                            </Grid>
                            <Grid item xs={6}>

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
                    <Grid item sm={8} xs={12} >
                    
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default MainGraph;