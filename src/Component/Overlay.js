import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { FaRegTimesCircle } from 'react-icons/fa'
import {IconContext} from "react-icons";
import {useDispatch} from "react-redux";
import { removeSideBar } from '../actions'

const useStyles = makeStyles(theme => ({
    overlay: {
        position: 'fixed',
        width: '100vw',
        height: '100vh !important',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(128,128,128,1)',
        display: 'block',
        zIndex: 100,     
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    close: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        fontWeight: 'bold',
        border: 'none',
        backgroundColor: 'transparent',
        zIndex: 7,
    }
}))

const Overlay = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <div className={classes.overlay}>
            <IconContext.Provider value={{ size: '2em', color: '#fff' }}>
            <button type='button' className={classes.close} onClick={() => dispatch(removeSideBar())}><FaRegTimesCircle/></button>
            {props.children}
            </IconContext.Provider>
        </div>
    );
};

export default Overlay;