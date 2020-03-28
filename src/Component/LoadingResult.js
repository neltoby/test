import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import {useSelector} from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';

const ColorCircularProgress = withStyles({
    root: {
        color: '#00695c',
    },
})(CircularProgress);

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #fff',
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const store = useSelector(state => state);
    const opens = store.loading
    console.log(opens)

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={opens}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={opens}>
          <div className={classes.paper}>
                <ColorCircularProgress size={20} thickness={5} />
                <Typography variant="body2" className={classes.bodyBold}>
                    Loading {store.component} payments ...
                </Typography>
          </div>
        </Fade>
      </Modal>
  );
}