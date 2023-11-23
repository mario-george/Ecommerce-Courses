import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next"; // Use your preferred i18n library
import { Button } from "./material-tailwind"; // Assuming Material Tailwind provides a Button component

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation("common"); // Assuming you are using react-i18next
  const [currentLanguage, setCurrentLanguage] = useState("en"); // Default language is English

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ar" : "en"; // Toggle between English ('en') and Arabic ('ar')
    setCurrentLanguage(newLanguage);

    // Check if i18n object exists and has the changeLanguage function before calling it
    if (i18n && typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(newLanguage); // Change the language using i18n library
    }
  };
  useEffect(() => {
    console.log("Translations loaded:", i18n.store); // Check loaded translations
  }, []);

  console.log(t);
  console.log(i18n);
  console.log(currentLanguage);
  return (
    <div className="mt-1 text-xl">
      {/* <p>{t("hello")}</p> */}
      <Button className="text-lg" onClick={toggleLanguage}>
        {currentLanguage === "en" ? "AR" : "EN"}{" "}
        {/* Toggle button text based on the current language */}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
