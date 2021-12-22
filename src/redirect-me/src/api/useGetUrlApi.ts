import axios from "axios";
import { useCallback, useState } from "react";

import ReturnModel from "./returnModel";

const useGetUrlApi = (code: string) => {
    const actionURL = `${process.env.REACT_APP_API_URL}/GetRedirect`;
    const [res, setRes] = useState<ReturnModel>({data: '', error: false, isLoading: false});

    const callAPI = useCallback(async () => {  
        try{
           const result = await axios.post(actionURL, { Id: code });
           setRes({data: result.data, isLoading: false, error: false});
        } catch (error: any) {
           setRes({data: '', isLoading: false, error: true});
        }
     }, [code, actionURL]);
     
     return [res, callAPI] as const;
}

export default useGetUrlApi;