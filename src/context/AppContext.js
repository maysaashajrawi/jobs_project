import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"));
  }, [language]);

  const opisateLang = language === "ar" ? "en" : "ar";
  return (
    <AppContext.Provider value={{ language, opisateLang }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
