import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { PrimeReactProvider } from "primereact/api";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import "/public/font/stylefont.css";
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <PrimeReactProvider>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </PrimeReactProvider>
);
