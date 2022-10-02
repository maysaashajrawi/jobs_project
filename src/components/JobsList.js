import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import JobItem from "./JobItem";
import Container from "@mui/material/Container";

function JobsList() {
  const { jobs, isLoading, error } = useContext(JobContext);
  const { t, i18n } = useTranslation();
  return (
    <Container maxWidth="md" sx={{ marginTop: 15 }}>
      {isLoading && <div>is Loading ...</div>}
      {error && <div> you have an error</div>}
      <Grid container spacing={2}>
        {jobs?.map((job) => (
          <JobItem key={job.uuid} job={job} />
        ))}
      </Grid>
    </Container>
  );
}

export default JobsList;
