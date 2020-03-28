import React from 'react';
import {fade,makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { IconContext } from 'react-icons';
import { MdExpandMore } from 'react-icons/md'
import LoadingResult from './LoadingResult'
import { useDispatch,useSelector} from 'react-redux'
import { allData, recData, unrecData, pendData, setData, loading, stop} from '../actions'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 0, 
        [theme.breakpoints.down('md')]: {
            marginLeft: '1px', 
        }   
    },
    long: {
        [theme.breakpoints.down('md')]: {
            marginLeft: '1px', 
        } 
    },
    formControl: {
        width: '80%',
        [theme.breakpoints.down('md')]: {
            width: '75%',
        }
    },
    show: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    showing: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '1.1rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
            fontWeight: '500',
        }
    },
    dropdownShow: {
        display: 'flex',
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'start',
        alignItems: 'start',
        [theme.breakpoints.down('md')]: {
            fontSize: '0.8rem',
            width: '25%',
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: '#ddd',
        },
        borderBottom: '2px solid #ddd',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        width: '90%',
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(1),
            fontSize: '0.7rem',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#aaa',
      },
    inputRoot: {
        color: '#aaa',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        fontSize: '0.8rem',
        [theme.breakpoints.up('md')]: {
            width: '20%',
            fontSize: '1.1rem',
        },
    },
}))

const ResultHeader = () => {
    const classes = useStyles();
    const [al, setAll] = React.useState('All');
    const list = ['All','Reconcilled','Un-reconcilled','Settled','Unsettled'];
    const dispatch = useDispatch();
    const all = useSelector(state => state)
    // const store = all.current;
    const categoryLen = all.category.length;
    const allLen = all.all.length;
    const handleChange = event => {
        let action = event.target.value === 'All' ? allData : event.target.value === 'Reconcilled' ? recData : 
        event.target.value === 'Un-reconcilled' ? unrecData : event.target.value === 'Unsettled' ? pendData : setData ;
        setAll(event.target.value);
        dispatch(loading(event.target.value))
        setTimeout(() => {
            dispatch(action())
            dispatch(stop())
        }, 2000);
        
    };
    return (
        <>
            <div className={classes.long}>
                <Typography variant="h5" className={classes.bodyBold}>
                    Payments
                </Typography>
            </div>
            <Grid container item className={classes.root}>
                <Grid item md={4} xs={12} className={classes.showing}>
                Showing &nbsp;
                    <span className={classes.numIcon}>
                        {categoryLen}
                        <span className={classes.iconExpand}>
                            <IconContext.Provider value={{ style: { verticalAlign: 'middle', color: ' #0040ff'} }}>
                                <MdExpandMore />
                            </IconContext.Provider>
                        </span>
                    </span> 
                    out of {allLen} payments
                </Grid>
                <Grid item md={4} xs={6}>                   
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Grid>
                <Grid item md={4} xs={6} className={classes.show}>
                <div className={classes.dropdownShow}>Show </div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="transaction">{al}</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={al}
                    onChange={handleChange}
                    label={al}
                    className={classes.formControl}
                    >
                    {list.map((item,i) => {                       
                        return <MenuItem value={item} key={i}>{item}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                </Grid>
            </Grid>
           <LoadingResult />
        </>
    );
};

export default ResultHeader;