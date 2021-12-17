import axios from "axios";
import { useCallback, useState } from "react";

const baseURL = "http://localhost:7071/api/CreateRedirect";

const useAddUrlApi = (url: string) => {
    const [res, setRes] = useState({data: null, error: null, isLoading: false});

    // You POST method here
    const callAPI = useCallback(() => {
         setRes(prevState => ({...prevState, isLoading: true}));
         axios.post(baseURL, { Url: url }).then(res => {
            setRes({data: res.data, isLoading: false, error: null});
         }).catch((error) => {
            setRes({data: null, isLoading: false, error});
         });
   }, [url]);
   
   return [res, callAPI] as const;
}

export default useAddUrlApi;