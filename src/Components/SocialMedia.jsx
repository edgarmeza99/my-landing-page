import { Button } from "primereact/button";

// import { useTranslation } from "react-i18next";

const SocialMedia = () => {
  const socialButton = {
    whatsapp:
      "https://api.whatsapp.com/send/?phone=595993580872&text=Hola+Edgar+%F0%9F%91%8B&type=phone_number&app_absent=0",
    instagram:
      "https://www.instagram.com/eddmeza_?igsh=MWJraml4MHY3Nnp0eg%3D%3D&utm_source=qr",
    github: "https://github.com/edgarmeza99",
    linkedin:
      "https://www.linkedin.com/in/edgar-daniel-meza-benitez-9480171a0/",
  };
  const handleClick = (app) => {
    window.open(socialButton[app], "blank");
  };
  return (
    <>
      <div className="grid m-1 mt-3 justify-content-center gap-3 mb-4">
        <Button
          rounded
          outlined
          severity="primary"
          icon="pi pi-linkedin"
          onClick={() => handleClick("linkedin")}
        ></Button>
        <Button
          rounded
          outlined
          severity="secondary"
          icon="pi pi-github"
          onClick={() => handleClick("github")}
        ></Button>
        <Button
          rounded
          outlined
          severity="danger"
          icon="pi pi-instagram"
          onClick={() => handleClick("instagram")}
        ></Button>
        <Button
          rounded
          outlined
          severity="success"
          icon="pi pi-whatsapp"
          onClick={() => handleClick("whatsapp")}
        ></Button>
      </div>
    </>
  );
};

export default SocialMedia;
