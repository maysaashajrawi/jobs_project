import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Search({ handleChange, handleSearch }) {
  const { t } = useTranslation();
  return (
    <Container
      maxWidth="md"
      sx={{
        background: "#f4f4f4",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch", background: "#fff" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-password-input"
          label={t("search.placeholder")}
          type="text"
          autoComplete="current-password"
          onChange={handleChange}
          name="title"
        />
      </Box>
      <Button variant="contained" onClick={handleSearch}>
        {t("search.button")}
      </Button>
    </Container>
  );
}

export default Search;
