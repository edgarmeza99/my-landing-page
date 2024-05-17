import React from "react";
import { useTranslation } from "react-i18next";

const Presentation = () => {
  const [t, i18next] = useTranslation("global");
  return (
    <>
      <div className="grid m-1 justify-content-center ">
        <h1 className="flex-column">{t("hello")}</h1>
      </div>
      <div className="grid m-1 justify-content-center">
        <h2 className="flex-colum text-center">{t("hello-sub")}</h2>
      </div>
      <div className="grid m-1 mt-3 justify-content-center">
        <img
          src="/images/myAvatar.svg"
          className="flex-colum border-circle w-10rem h-10rem"
        />
      </div>
    </>
  );
};

export default Presentation;
