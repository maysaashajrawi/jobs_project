import axios from "axios";
import {
  URL_BASE,
  METHOD,
  ACCEPT_ACCOUNT,
  ACCEPT_COMPANY,
  ACTIONS,
  LIMIT,
} from "../constantsFile";
import { useEffect, useReducer } from "react";
import jobReducer from "../reducers/jobReducer";

export default function useJobs(itemQuery, currentPage) {
  const [state, dispatch] = useReducer(jobReducer, {
    jobsList: [],
    isLoading: true,
    error: false,
    total: "",
  });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    //
    const requestOptions = {
      method: METHOD,
      headers: {
        "Content-Type": "application/json",
        "accept-account": ACCEPT_ACCOUNT,
        "accept-company": ACCEPT_COMPANY,
      },
      cancelToken: cancelToken.token,
      params: {
        language_profile_uuid: "ee5d991c-cdc6-4e83-b0b3-96f147208549",
        limit: LIMIT,
        page: currentPage,
        itemQuery: itemQuery,
      },
    };

    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(URL_BASE, requestOptions)
      .then((response) => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { jobs: response.data.results.jobs },
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    // to clean up
    return () => {
      cancelToken.cancel();
    };
  }, [currentPage, itemQuery]);

  return { state, dispatch };
}
