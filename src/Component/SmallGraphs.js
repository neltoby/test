import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
    AreaChart, Area, ResponsiveContainer,
  } from 'recharts';
import {useSelector} from "react-redux";
// import { increase, decrease} from '../actions'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '48%',
        margin: '0 1% 1% 0',
        marginBottom: '1%',
        [theme.breakpoints.up('md')]: {
            width: '24%',
            padding: '0.5rem 0 0 0 !important',
            margin: '0 1% 0 0',
            flexWrap: 'nowrap',
            borderRadius: '0',
        },
    },
    details: {
        width: '65%',
        padding: '0 !important',
        margin: '0 !important',
        [theme.breakpoints.down('md')]: {
            marginBottom: '1%',
        },
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
        width: '35%',
        paddingRight: '0.5rem',
        [theme.breakpoints.down('md')]: {
  
        },
    },
    body: {
        fontSize: '0.8rem',
        margin: '0',
        padding: '0',
        [theme.breakpoints.down('md')]: {
            fontSize: '0.8rem'
        },
    },
    bodyBold: {
        fontWeight: 'bold',
    },
  }));

const SmallGraphs = (props) => {
    const classes = useStyles();
    const store = useSelector(state => state);
    const smallData = store.currentData.alldata.smallData;
    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography variant="body2" color="textSecondary" className={classes.body}>
                    {props.item.text}
                </Typography>
                <Typography variant="subtitle1" className={classes.bodyBold}>
                    {props.item.amt}
                </Typography>
                </CardContent>
            </div>
            <div className={classes.cover}>
                <ResponsiveContainer width='100%' height={40}>
                    <AreaChart
                        data={smallData}
                        margin={{
                            top: 5, right: 0, left: 0, bottom: 5,
                        }}
                    >
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default SmallGraphs;