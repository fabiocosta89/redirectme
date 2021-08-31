import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { useState } from 'react';

const UrlCard = () => {

  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
  }

  const onChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card raised={true}>
        <CardContent>
          <Grid item xs={12}>
            <Typography variant="h3" component="h1">
              Shorten your link
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="p">
              Insert your big link to get a shorter version.
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
            >
              Shorten
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
}

export default UrlCard;