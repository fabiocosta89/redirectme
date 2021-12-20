import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetUrlApi from "../../api/useGetUrlApi";

interface RouteParams {
    id: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

const RedirectPage = () => {
    const classes = useStyles();
    const { id }  = useParams<RouteParams>();
    const [result, addUrlApi] = useGetUrlApi(id);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            await addUrlApi();
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (result.data !== "") window.location.href = result.data;
    }, [result]);

    return (
        <Backdrop className={classes.backdrop} open={isLoading}>
            <CircularProgress color="inherit" />
            <span> </span>
            <Typography variant="h3" component="h1">
                Redirecting...
            </Typography>
        </Backdrop>
    );
}

export default RedirectPage;