import { createContext, useState } from "react";
import useJobs from "../hooks/useJobs";
export const JobContext = createContext({});
const JobContextProvider = (props) => {
  const [page, setPage] = useState(1);

  const [itemQuery, setItemQuery] = useState("");

  const {
    state: { jobsList, isLoading, error },
    dispatch,
  } = useJobs(itemQuery, page);
  return (
    <JobContext.Provider
      value={{
        jobs: jobsList,
        isLoading: isLoading,
        error: error,
        page,
        setPage,
        itemQuery,
        setItemQuery,
        dispatch,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};
export default JobContextProvider;
