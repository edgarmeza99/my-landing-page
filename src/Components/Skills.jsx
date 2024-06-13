import { Card } from "primereact/card";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation("global");
  return (
    <div className="grid mt-2 ">
      <div className=" grid gap-4 m-1 justify-content-center align-content-center">
        <Card className="col-12 md:col-3">
          <div className="grid justify-content-center">
            <h2 className="col-12 text-center ">{t("frontendDeveloper")}</h2>
            <h3 className="col-12 mt-0 text-center text-primary text-300">
              {t("lenguages")}
            </h3>
            <p>HTML, CSS, Sass, JavaScript</p>
            <h3 className="col-12 text-center text-primary text-300">
              {t("devTools")}
            </h3>
            <ul className="col-12 mt-0 list-none text-center line-height-4">
              <li>React Js</li>
              <li>Vite</li>
              <li>Bootstrap</li>
              <li>PrimeReact</li>
              <li>PrimeFlex</li>
              <li>Zustand</li>
              <li>VS Code</li>
            </ul>
          </div>
        </Card>
        <Card className="col-12 md:col-3">
          <div className="grid justify-content-center">
            <h2 className="col-12 text-center">{t("backendDeveloper")}</h2>
            <h3 className="col-12 mt-0 text-center text-primary text-300">
              {t("lenguages")}
            </h3>
            <p>SQL, Java, Node Js, Bash</p>
            <h3 className="col-12 text-center text-primary text-300">
              {t("devTools")}
            </h3>
            <ul className="col-12 mt-0 list-none text-center line-height-4">
              <li>Spring Boot</li>
              <li>Postgres SQL</li>
              <li>Jaspert Report</li>
              <li>Docker</li>
              <li>Linux</li>
              <li>Git</li>
              <li>IntelliJ IDEA</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
