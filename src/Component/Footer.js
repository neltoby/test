import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Overlay from './Overlay'
import Side from './Side'
import {useSelector, useDispatch} from 'react-redux'
import { next, prev, goto } from '../actions'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,  
        flexDirection: 'row',
        backgroundColor: 'rgba(128,128,128,0.1)',
        margin: 0,
        padding: 0,  
    },
    paginationContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    control: {
        padding: '0.5rem',
        width: '4rem',
        textAlign: 'center',
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: '#aaa',
            color: '#fff',
        }
    },
    sideBarFooter: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            paddingTop: '2rem',
            paddingBottom: '2rem',
            width: '95%',
            paddingLeft: 0,
            paddingRight: 0,
            margin: '0 0.5rem 0 -0.5rem',
            height: 'inherit',
            backgroundColor: '#fff',
            display: 'block',
        }
    },
    right: {
        // text-align: right;
        // padding-right: 3.5rem;
    },
    rootSize: {
        paddingTop: '2rem',
        paddingBottom: '2rem',
        margin: 0,
        height: '100%',
        backgroundColor: 'rgba(128,128,128,0)',
        paddingLeft: '1.3rem',
    },
}))

const Footer = () => {
    const classes = useStyles();
    const store = useSelector(state => state);
    const dispatch = useDispatch();
    const count = store.count;
    const total = store.total;
    const catCount = store.catCount;
    const category = store.category;
    const start = ((count - 1) * 10) + 1 ;
    const end = (start + category.length) - 1 ;
    const text = count ? `Showing ${start} to ${end} of ${catCount} entries` : '';
    const structure = total > 2 ? count === 1 ? <div className={classes.paginationContainer}>
              <div className={`${classes.num} ${classes.control}`} onClick={() => dispatch(goto(1))}>1</div>
              <div className={`${classes.num} ${classes.control}`} onClick={() => dispatch(goto(2))}>2</div>
              <div className={`${classes.num} ${classes.control}`} onClick={() => dispatch(next())}>Next</div>
              </div>: count === total ?
      <div className={classes.paginationContainer}>
          <div className={`${classes.prev} ${classes.control}`} onClick={() => dispatch(prev())}>Prev</div>
          <div className={`${classes.num} ${classes.control}`} onClick={() => dispatch(goto(1))}>1</div>
          <div className={`${classes.num} ${classes.control}`}  onClick={() => dispatch(goto(2))}>2</div>
      </div> :
           <div className={classes.paginationContainer}>
              <div className={`${classes.prev} ${classes.control}`} onClick={() => dispatch(prev())}>Prev</div>
              <div className={`${classes.num} ${classes.control}`} onClick={() => dispatch(goto(1))}>1</div>
              <div className={`${classes.num} ${classes.control}`}  onClick={() => dispatch(goto(2))}>2</div>
              <div className={`${classes.next} ${classes.control}`} onClick={() => dispatch(next())}>Next</div>
           </div>:
      total === 2 ? count === 1 ?
          <div className={classes.paginationContainer}>
              <div className={`${classes.num} ${classes.control}`} onClick={() => dispatch(next())}>Next</div>
          </div> :
          <div className={classes.paginationContainer}>
                 <div className={`${classes.num} ${classes.control}`} onClick={() => dispatch(prev())}>Prev</div>
                 <div className={`${classes.num} ${classes.control}`} onClick={() => dispatch(next())}>Next</div>
            </div> :  '';
        const overlay = store.side ? <Overlay><Side overlay={true} /></Overlay> : '';
    return (
        <>
            <Grid container className={classes.root}>
                <Grid item md={3} >
                    <div className={classes.sideBarFooter}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>                                     
                </Grid>
                <Grid item container md={9} xs={12} className={classes.rootSize}> 
                    <Grid xs={6} className={classes.left}> 
                        {text}
                    </Grid>
                    <Grid xs={6} className={classes.right}>
                        {structure}                  
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid container>
                {overlay}
            </Grid>
        </>
    );
};

export default Footer;