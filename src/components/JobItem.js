import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function JobItem({ job }) {
  const { t } = useTranslation();
  const {
    title,
    location: { country },
    career_level,
    skills,
  } = job;
  return (
    <Grid item md={2} sm={4} xs={12}>
      <Card sx={{ minWidth: 130 }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: 14,
              minHeight: 40,
              color: "black",
            }}
            gutterBottom
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              minHeight: 20,
              color: "black",
              borderBottom: "1px solid #ddd",
            }}
            gutterBottom
          >
            {country}
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              minHeight: 20,
              maxHeight: 20,
              color: "black",
              borderBottom: "1px solid #ddd",
              overflowWrap: "break-word",
              inlineSize: "40px",
              overflow: "hidden",
            }}
            className="cardTitle"
            gutterBottom
          >
            {career_level.join(",")}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: "black",
              overflowWrap: "break-word",
              minHeight: 20,
              maxHeight: 20,
              overflow: "hidden",
            }}
            className="cardTitle"
            gutterBottom
          >
            {skills.join(",")}
          </Typography>
        </CardContent>
        {console.log("hello from item ", job)}
        <CardActions>
          <Link to={`/job-datails/${job.uri}`}>
            <Button size="small" variant="outlined" sx={{ marginLeft: "auto" }}>
              {t("jobItem.view")}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default JobItem;
