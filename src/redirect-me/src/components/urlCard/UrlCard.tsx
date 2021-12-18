import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField/';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { useState } from 'react';

import useAddUrlApi from '../../api/useAddUrlApi';
import ModalRedirect from '../modalRedirect/ModalRedirect';

const UrlCard = () => {
  const [url, setUrl] = useState<string>("");
  const [result, addUrlApi] = useAddUrlApi(url);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  var expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (url.match(regex)) {
      setShowAlert(false);
      addUrlApi();
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
    setOpen(true);
  };

  // handle for closing the modal
  const modalClose = () => {
    setOpen(false);
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
      <ModalRedirect open={open} url={result.data} modalClose={modalClose} />
    </>
  );
}

export default UrlCard;