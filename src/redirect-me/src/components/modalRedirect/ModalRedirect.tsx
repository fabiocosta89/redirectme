import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';

const getModalStyle = () => {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
  
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: '60%',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            textAlign: 'center',
        },
    }),
);

interface ModalRedirectModel {
    open: boolean;
    code: string;
    modalClose(): any;
}

const ModalRedirect = ({open, code, modalClose} : ModalRedirectModel) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const newUrl = `${process.env.REACT_APP_FRONT_URL}/${code}`;

    // handle for closing the modal
    const handleClose = () => {
        modalClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="Url redirect"
            aria-describedby="Here is your url redirect"
        >
            <div style={modalStyle} className={classes.paper}>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h2">
                        Your new url
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" component="p">
                        Use this new shorter url to share with others and get a redirection.
                        Keep this url safe, as it <b>cannot be recovered</b>!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ChevronRightIcon />
                    <Link 
                        href={newUrl}
                        target="_blank"
                        rel="noopener"
                    >
                        {newUrl}
                    </Link>
                    <ChevronLeftIcon />
                </Grid>
            </div>
        </Modal>
    );
}

export default ModalRedirect;