import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext";
import Container from "@mui/material/Container";

function Navbar() {
  const { language } = useContext(AppContext);
  const opisateLang = language === "ar" ? "en" : "ar";
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <header className="blackBackground">
      <Container maxWidth="md">
        <nav>
          <ul className="unstyledList flex justifyContantSpaceBetween">
            <li className="logo">
              <a>ELEVATUS</a>{" "}
            </li>
            <li>
              <a onClick={() => handleChangeLanguage(opisateLang)}>
                {t("navbar.language")}
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
