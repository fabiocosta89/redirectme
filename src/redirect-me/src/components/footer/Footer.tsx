import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      position: "fixed",
      width: "100%",
      left: 0,
      bottom: 0,
    }
  })
);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              <Link 
                href="https://fabiocosta.eu"
                target="_blank" 
                color="inherit"
                rel="noopener"
                underline="none"
                >© {new Date().getFullYear()} Fabio Costa
              </Link>
              <span> | </span>
              <Link 
                href="https://github.com/fabiocosta89/redirectme"
                target="_blank" 
                color="inherit"
                rel="noopener"
                underline="none"
                >Source Code
              </Link>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </footer>
    );
}

export default Footer;