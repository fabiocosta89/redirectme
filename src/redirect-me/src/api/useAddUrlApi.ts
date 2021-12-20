import axios from "axios";
import { useCallback, useState } from "react";

import ReturnModel from "./returnModel";

const useAddUrlApi = (url: string) => {
   const actionURL = `${process.env.REACT_APP_API_URL}/CreateRedirect`;
   const [res, setRes] = useState<ReturnModel>({data: '', error: false, isLoading: false});

   const callAPI = useCallback(async () => {
      setRes(prevState => ({...prevState, isLoading: true}));

      try{
         const result = await axios.post(actionURL, { Url: url });
         setRes({data: result.data, isLoading: false, error: false});
      } catch (error: any) {
         setRes({data: '', isLoading: false, error: true});
      }
   }, [url, actionURL]);
   
   return [res, callAPI] as const;
}

export default useAddUrlApi;