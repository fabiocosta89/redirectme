import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Link from '@material-ui/core/Link';

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
        },
    }),
);

interface ModalRedirectModel {
    open: boolean;
    url: string;
}

const ModalRedirect = ({open, url}:ModalRedirectModel) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    // handle for closing the modal
    const handleClose = () => {
        
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="Url redirect"
            aria-describedby="Here is your url redirect"
        >
            <div style={modalStyle} className={classes.paper}>
                <h2>Your new url</h2>
                <p>
                    Use this new shorter url to share with others and get a redirection.
                </p>
                <Link 
                    href={url}
                    target="_blank"
                    rel="noopener"
                >
                    {url}
                </Link>
            </div>
        </Modal>
    );
}

export default ModalRedirect;