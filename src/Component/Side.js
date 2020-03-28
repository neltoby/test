import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import { IconContext } from 'react-icons'
import { DiClojure } from 'react-icons/di'
import { MdPayment } from 'react-icons/md'
import { MdEventNote } from 'react-icons/md'
import { IoMdRadioButtonOn } from 'react-icons/io'
import { IoMdBook } from 'react-icons/io'
import { TiBook } from 'react-icons/ti'
import { FaRegUser } from 'react-icons/fa'
import { IoMdPaper } from 'react-icons/io'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AiOutlineReconciliation } from 'react-icons/ai'
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    container: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '90%',
            fontSize: '0.9rem',
        },
    },
    but: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(4),
    },
    invoice: {
        backgroundColor: '#00b300',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        color: '#fff',
        width: '70%',
        borderRadius: '180px',
        '&:hover': {
            backgroundColor: '#008000',
        },
        [theme.breakpoints.up('md')]: {
            width: '90%',
            fontSize: '1.0rem',
            '&:hover': {
                backgroundColor: '#008000',
            },
        },
    },
    noHover: {
        '&:hover': {
            backgroundColor: '#fff'
        }
    },
    hover: {
        '&:hover': {
            backgroundColor: '##ccd9ff',
            borderLeft: '3px solid #0040ff',
        }
    },
    mobile: {
        width: '60%',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        overflowY: 'scroll',
        backgroundColor: '#fff',
    }
}))

const Side = (props) => {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const items = [{text: 'Main'},{text: 'Overview', 'icon': <DiClojure/>}];
	const payments = [{text: 'Payments'},{text: 'All Payments', 'icon': <MdPayment/>},
		{text: 'Reconcilled Payments', 'icon': <MdEventNote/>},
		{text: 'Un-Reconcilled Payments', 'icon': <AiOutlineReconciliation/>},
		{text: 'Manuel Settlement', 'icon': <IoMdRadioButtonOn/>}];
	const orders = [{text: 'Orders'},{text: 'All Orders', 'icon': <IoMdBook/>},
		{text: 'Pending Orders', 'icon': <TiBook/>},
		{text: 'Reconcilled Orders', 'icon': <IoMdPaper />}];
    const profile = [{text: 'Merchant Profile', 'icon': <FaRegUser/>}];
    let size = props.overlay ? '1em' : '2em';
    const content = (
        <>
        <div className={classes.but}>
            <Button 
                fullWidth={true} 
                className={classes.invoice}
            >
                GENERATE INVOICE
            </Button>
        </div>

        <IconContext.Provider value={{ className: 'ul-icon', size: size, color: '#004d4d' }}>
        <List dense={dense}>
            {items.map((item,i) => {
                if(item.icon){
                    return (
                        <>
                        <ListItem button key={`${i}${item.text}`} className={classes.hover}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                        </>
                    )
                }else{
                    return (
                        <ListItem button key={`${i}${item.text}`} className={classes.noHover}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    )
                }
            })}
        </List>
        <List dense={dense}>
            {payments.map((item,i) => {
                if(item.icon){
                    return (
                        <>
                        <ListItem button key={`${i}${item.text}`} className={classes.hover}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                        </>
                    )
                }else{
                    return (
                        <ListItem button key={`${i}${item.text}`} className={classes.noHover}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    )
                }
            })}
        </List>
        <List dense={dense}>
            {orders.map((item,i) => {
                if(item.icon){
                    return (
                        <>
                        <ListItem button key={`${i}${item.text}`} className={classes.hover}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                        </>
                    )
                }else{
                    return (
                        <ListItem button key={`${i}${item.text}`} className={classes.noHover}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    )
                }
            })}
        </List>
        <List dense={dense}>
            {profile.map((item,i) => {
                if(item.icon){
                    return (
                        <>
                        <ListItem button key={i} className={classes.hover}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                        </>
                    )
                }else{
                    return (
                        <ListItem button className={classes.noHover}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    )
                }
            })}
        </List>
        </IconContext.Provider>
        </>
    )
    const mobile = <div className={classes.mobile}>{content}</div>;
    const desktop = (
        <Grid item md={3} className={classes.root}>
            <div className={classes.container} >
                <Box
                    boxShadow={2}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '100%', height: '100%' }}
                >
                {content}
                </Box>
            </div>
        </Grid>
    )
    const container = props.overlay ? mobile : desktop ;
    return (
        <>
            {container}
            
        </>
    );
};

export default Side;