import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField/';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { useState } from 'react';

import useAddUrlApi from '../../api/useAddUrlApi';
import ModalRedirect from '../modalRedirect/ModalRedirect';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

const UrlCard = () => {
  const [url, setUrl] = useState<string>("");
  const [result, addUrlApi] = useAddUrlApi(url);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);

  var expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();

    if (url.match(regex)) {
      showLoading(true);
      setShowAlert(false);
      await addUrlApi();
      showLoading(false);
      modalOpen();
    } else {
      setShowAlert(true);
    }
  }

  const onChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  }

  // handle for opening the modal
  const modalOpen = () => {
    setOpenModal(true);
  };

  // handle for closing the modal
  const modalClose = () => {
    setUrl("");
    setOpenModal(false);
  };

  // Handle loading
  const showLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card raised={true}>
          <CardContent>
            <Grid item xs={12}>
              <Typography variant="h3" component="h1">
                Small is easier
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="p">
                Insert your big URL and get shorter redirect to it.
              </Typography>
            </Grid>
            <br />
            <Grid item xs={12}>
              <TextField 
                id="linkTextField" 
                label="Link"
                variant="outlined"
                size="medium"
                fullWidth
                placeholder="http://... or https://..."
                value={url}
                onChange={onChangeUrl}
              />
            </Grid>
            { showAlert && 
              <Alert severity="error">The URL is not valid!</Alert>
            }
            <br />
            <Grid item
              xs={12}
              container
              alignItems="center"
              direction="row"
              justify="center"
            >
              <Button 
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                value="Submit"
                onSubmit={handleSubmit}
              >
                Shorten
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </form>
      <ModalRedirect open={openModal} code={result.data} modalClose={modalClose} />
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default UrlCard;