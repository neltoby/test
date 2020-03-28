import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    graphDetails: {
        height: '50%',
        paddingRight: '1rem',
        // paddingBottom: '1rem',
        '& p span':{
            marginLeft: '0.5rem',
        }
    },
    morePadding: {
        paddingBottom: '1rem',
        [theme.breakpoints.down('md')]: {
            paddingBottom: '2rem',
        }
    },
    title: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
    },
    progresBar: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '8px',
        marginBottom: '2rem',
    },
    moreColor: {
        height: 'inherit',
        display: 'inline-block',
    },
    lessColor: {
        height: 'inherit',
        display: 'inline-block',
    },
    second: {
        '& span':{
        color: '#ffd900',
        }
    },
    third: {
        '& span':{
            color: '#00b300',
            }
    },
    fouth: {
        '& span':{
            color: '#0040ff',
            }
    }
}))

const GraphDetail = (props) => {
    const classes = useStyles();
    const more = `${props.item.third.value}%`;
    const less = `${props.item.second.value}%`;
    const classname = props.classname ? classes.graphDetails : `${classes.graphDetails} ${classes.morePadding}`;
    return (
        <div className={classname}>
        <p className={classes.title}>{props.item.title}</p>
        <div className={classes.progresBar}>
            <div className={classes.moreColor} style={{width: more, backgroundColor: '#00b300'}} >
            </div>
            <div className={classes.lessColor} style={{width: less, backgroundColor: '#ffd900'}} >
            </div>
        </div>
        <p className={classes.second}>
            {props.item.second.text} : <span>{props.item.second.value}</span>
        </p>
        <p className={classes.third}>
            {props.item.third.text} : <span>{props.item.third.value}</span>
        </p>
        <p className={classes.fouth}>
            {props.item.fouth.text} : <span>{props.item.fouth.value}</span>
        </p>
        </div>
    );
}

export default GraphDetail;