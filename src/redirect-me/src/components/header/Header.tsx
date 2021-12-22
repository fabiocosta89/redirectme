import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar id="top">
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" underline="none" component={RouterLink} to="/">
              Redirect-Me
            </Link>
          </Typography>
          <Button color="inherit">
            <Link color="inherit" underline="none" component={RouterLink} to="/policy">
              Policy
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;