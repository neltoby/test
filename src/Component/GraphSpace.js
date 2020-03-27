import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import SmallGraphs from './SmallGraphs'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        margin: '2rem 0',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            width: '100%',
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