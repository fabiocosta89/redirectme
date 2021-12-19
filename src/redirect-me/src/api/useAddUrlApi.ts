import axios from "axios";
import { useCallback, useState } from "react";

import ReturnModel from "./returnModel";

const useAddUrlApi = (url: string) => {
   const actionURL = `${process.env.REACT_APP_API_URL}/CreateRedirect`;
   const [res, setRes] = useState<ReturnModel>({data: '', error: null, isLoading: false});

   const callAPI = useCallback(async () => {
      setRes(prevState => ({...prevState, isLoading: true}));

      try{
         const res = await axios.post(actionURL, { Url: url });
         setRes({data: res.data, isLoading: false, error: null});
      } catch (error: any) {
         setRes({data: '', isLoading: false, error});
      }
   }, [url, actionURL]);
   
   return [res, callAPI] as const;
}

export default useAddUrlApi;