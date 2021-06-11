import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const UrlCard = () => {
  return (
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
          <Button variant="contained" color="primary" size="large">Shorten</Button>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default UrlCard;