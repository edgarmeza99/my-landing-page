import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation("global");
  return (
    <div className="grid mt-8 p-8 bg-primary justify-content-center align-content-center border-round m-1">
      <h2 className="text-center">{t("aboutme-title")}</h2>
      <div className="flex-colum text-center">{t("aboutme")}</div>
    </div>
  );
};

export default AboutMe;
