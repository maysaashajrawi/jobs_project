import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ACTIONS } from "../constantsFile";
import { JobContext } from "../context/JobContext";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function JobDetails() {
  const { dispatch, jobs } = useContext(JobContext);
  const { uri } = useParams();

  useEffect(() => {
    dispatch({
      type: ACTIONS.GET_JOB_DETAILS,
      payload: { selectedJob: jobs.filter((job) => job.uri === uri) },
    });
    return () => {
      return;
    };
  }, [uri]);
  const { selectedJob } = useContext(JobContext);
  return (
    <section>
      <div></div>
      <div></div>
    </section>
  );
}

export default JobDetails;
