import axios from "axios";
import { useCallback, useState } from "react";

import ReturnModel from "./returnModel";

const baseURL = "http://localhost:7071/api/CreateRedirect";

const useAddUrlApi = (url: string) => {
    const [res, setRes] = useState<ReturnModel>({data: '', error: null, isLoading: false});

    // POST method
    const callAPI = useCallback(() => {
         setRes(prevState => ({...prevState, isLoading: true}));
         axios.post(baseURL, { Url: url }).then(res => {
            setRes({data: res.data, isLoading: false, error: null});
         }).catch((error) => {
            setRes({data: '', isLoading: false, error});
         });
   }, [url]);
   
   debugger;
   return [res, callAPI] as const;
}

export default useAddUrlApi;