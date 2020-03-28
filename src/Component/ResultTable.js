import React from 'react';
import {useSelector} from 'react-redux'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { IconContext } from 'react-icons'
import { MdExpandMore } from 'react-icons/md'
import { GoPrimitiveDot } from 'react-icons/go'

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#ddd',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: '0.85rem',
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
}))(TableRow);

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '1rem',
    },
    table: {
        width: '100%',
    },
    name: {
        marginRight: '0.6rem',
        backgroundColor: '#336699',
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    row: {
        display: 'flex',
        flexDirection: 'row',  
    },
    status: {
        border: '1px solid #ddd',
        borderRadius: '180px',
        width: '80%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            fontSize: '0.7rem',
        },
    },
    tableCell: {
        [theme.breakpoints.down('md')]: {
            fontSize: '0.85rem',
        }
    }
}));

export default function CustomizedTables() {
    const classes = useStyles(); 
    const store = useSelector(state => state.category);
    const count = store.length;
    return (
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell>Item Type</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Transaction No</StyledTableCell>
                <StyledTableCell align="right">Time</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">&nbsp;&nbsp;</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {count ? store.map((row,i) => {
                const color = row.status === 'Reconcilled' ? '#00b33c' : row.status === 'Pending' ? 
                '#e6e600' : '#e0e0d1' ;
                return(
                <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row" className={classes.tableCell}>
                        <span className={classes.row}>
                            <Avatar className={classes.name}>vw</Avatar>{row.type}
                        </span>
                    
                    </StyledTableCell>
                    <StyledTableCell align="right"  className={classes.tableCell}>
                        {row.price}
                    </StyledTableCell>
                    <StyledTableCell align="right" className={classes.tableCell}>
                        {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right" className={classes.tableCell}>
                        {row.time}
                    </StyledTableCell>
                    <StyledTableCell align="right" className={classes.tableCell}>
                        <IconContext.Provider value={{ className: 'but-icon', size: '1em', color: color }}>
                            <Button                           
                                className={classes.status}
                                style={{color: color}}
                            >
                                <GoPrimitiveDot/>
                                {row.status}
                            </Button>
                        </IconContext.Provider>
                        
                    </StyledTableCell>
                    <StyledTableCell align="right"  className={classes.tableCell}>
                        <IconContext.Provider value={{  size: '2em', color: '#aaa' }}>
                            <MdExpandMore />
                        </IconContext.Provider>
                    </StyledTableCell>
                </StyledTableRow>
                )
            }) : <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                        <h5>No result for {store.current} payment </h5>              
                    </StyledTableCell>
                </StyledTableRow>}
                
            </TableBody>
        </Table>
      </TableContainer>
    );
  }