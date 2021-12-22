import { Button, Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import image404 from "./404.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: '100%'
    },
  }),
);

const NotFound = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Grid 
                container 
                justifyContent="center"
                alignItems="center" 
                direction="column"
            >
                <Grid item xs={12}>
                    <img 
                        src={image404}
                        alt="404"
                        className={classes.image}
                        width={300}
                        height={400}
                    />
                </Grid> 
                <Grid item xs={12}>
                    <Typography variant="h2" component="h1">
                        Sorry, not found
                    </Typography>
                </Grid> 
                <Grid item xs={12}>
                <Button 
                    variant="contained" 
                    color="primary"
                >
                    <Link color="inherit" underline="none" component={RouterLink} to="/">
                        Return to Home
                    </Link>
                </Button>
                </Grid>
            </Grid>
        </Container>);
}

export default NotFound;