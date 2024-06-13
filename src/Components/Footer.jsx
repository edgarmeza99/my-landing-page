import React from "react";
import SocialMedia from "./SocialMedia";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");
  function obtenerAno() {
    var d = new Date();
    var n = d.getFullYear();
    return n;
  }
  return (
    <>
      <div className="grid mt-8 p-8 bg-primary justify-content-center align-content-center border-round m-1">
        <div className="font-italic  p-4">{t("footer.phrase")}</div>

        <div className="col-12 m-1 gap text-center justify-content-center align-content-center">
          <img
            src="/images/ico.png"
            alt="logo-pie-pagina"
            width={54}
            height={49.6}
          />
        </div>
        <div className="col-12 m-1 gap text-center justify-content-center align-content-center">
          {t("footer.invitation")}
        </div>
        <SocialMedia />
        <div className="col-12 text-center">
          {/* Creado por <span className="pi pi-copyright"> ©</span> @edgarmeza */}
          {t("footer.copyright")} {obtenerAno()}
        </div>
      </div>
    </>
  );
};

export default Footer;
