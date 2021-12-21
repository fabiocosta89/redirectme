import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

interface LocationState {
    from: {
      pathname: string;
    };
  }

const useGaTracker = () => {
    const location = useLocation<LocationState>();
    const [initialized, setInitialized] = useState(false);
    const gaCode = `${process.env.REACT_APP_GA_CODE}`;

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize(gaCode);
            setInitialized(true);
        }
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);
};

export default useGaTracker;