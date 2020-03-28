import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import SmallGraphs from './SmallGraphs'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        margin: '1rem 0',
        flexWrap: 'wrap',
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
            
            margin: '2rem 0',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItem: 'center',
        },
    },
}))

const GraphSpace = () => {
    const classes = useStyles();
    const store = useSelector(state => state);
	const daily = store.currentData.alldata.daily;
	const total = store.currentData.alldata.total;
    return (
        <div className={classes.root}>
            {daily.map((item,i) => {
                return <SmallGraphs item={item} id={i} key={i} />
            })}
            {total.map((item,i) => {
                return <SmallGraphs item={item} id={i} key={i} />
            })}
        </div>
    );
};

export default GraphSpace;