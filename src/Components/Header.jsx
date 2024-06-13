import { changeLanguage } from "i18next";
import { PrimeReactContext } from "primereact/api";
import { Dropdown } from "primereact/dropdown";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "primereact/icons/chevrondown";
import { ChevronRightIcon } from "primereact/icons/chevronright";

const Header = () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(isDark ? "dark" : "light");
  const { i18n } = useTranslation("global");
  const lng = i18n.language;
  const { changeTheme } = useContext(PrimeReactContext);
  useEffect(() => {
    changeMyTheme();
  }, []);
  const changeMyTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    changeTheme(
      `lara-${theme}-blue`,
      `lara-${newTheme}-blue`,
      "theme-link",
      () => setTheme(newTheme)
    );
  };
  const countries = [
    { name: "ESP", code: "ES" },
    { name: "ENG", code: "EN" },
  ];
  const [selectedCountry, setSelectedCountry] = useState({
    name: lng.includes("es") ? "ESP" : "ENG",
    code: lng.includes("es") ? "ES" : "EN",
  });

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <img
            alt={option.name}
            src={`/images/${option.code.toLowerCase()}.png`}
            className={`mr-2 flag flag-${option.code.toLowerCase()}`}
            style={{ width: "18px" }}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img
          alt={option.name}
          src={`/images/${option.code.toLowerCase()}.png`}
          className={`mr-2 flag flag-${option.code.toLowerCase()}`}
          style={{ width: "18px" }}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  const handleChange = (e) => {
    changeLanguage(e.value.code.toLowerCase() === "en" ? "en" : "es");
    setSelectedCountry(e.value);
  };
  return (
    <header className="grid m-2">
      <div className="flex-1 ">
        <img className="h-3rem" src="/images/logo.png" alt="logotipo" />
      </div>
      <u className="flex list-none m-0 p-0 gap-2 align-items-center">
        <li>
          <div className="card flex justify-content-center">
            <Dropdown
              value={selectedCountry}
              onChange={(e) => handleChange(e)}
              options={countries}
              optionLabel="name"
              placeholder="Select a Country"
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="w-full md:w-14rem"
              dropdownIcon={(opts) => {
                return opts.iconProps["data-pr-overlay-visible"] ? (
                  <ChevronRightIcon {...opts.iconProps} />
                ) : (
                  <ChevronDownIcon {...opts.iconProps} />
                );
              }}
            />
          </div>
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
              window.open("https://github.com/edgarmeza99", "blank");
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
