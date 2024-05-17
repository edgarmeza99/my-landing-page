import { PrimeReactContext } from "primereact/api";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const { i18n } = useTranslation("global");
  const lng = i18n.language;
  const { changeTheme } = useContext(PrimeReactContext);
  const changeMyTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    changeTheme(
      `lara-${theme}-blue`,
      `lara-${newTheme}-blue`,
      "theme-link",
      () => setTheme(newTheme)
    );
  };
  return (
    <header className="grid m-2">
      <div className="flex-1 ">
        <img
          className="h-3rem"
          src="https://www.primefaces.org/cdn/primeflex/images/PrimeFlexLogo.svg"
          alt=""
        />
      </div>
      <u className="flex list-none m-0 p-0 gap-2 align-items-center">
        <li>
          <button
            onClick={() => i18n.changeLanguage(lng === "es" ? "en" : "es")}
            target="_blank"
            className="flex px-0 flex-shrink-0 border-1 border-solid w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
          >
            <i className="pi pi-language" />
          </button>
        </li>
        <li>
          <button
            className="flex flex-shrink-0 border-1 border-solid w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
            onClick={changeMyTheme}
          >
            <i className={`pi ${theme === "dark" ? "pi-sun" : "pi-moon"}`} />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.ta;
              window.location.href = "https://github.com/edgarmeza99";
            }}
            target="_blank"
            className="flex px-0 flex-shrink-0 border-1 border-solid w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
          >
            <i className="pi pi-github" />
          </button>
        </li>
      </u>
    </header>
  );
};

export default Header;
