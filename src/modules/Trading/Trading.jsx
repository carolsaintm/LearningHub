import {
    HeroBlock,
    Button,
  } from "@exxonmobil/react-unity";
  import React from "react";
  import keyboard from "../../assets/keyboard.jpg"
  import { Link } from "react-router-dom";
  import Styles from "./style.module.scss";
  import snowflake from "./../../assets/snowflake.png";
  import apiImg from "./../../assets/apiImg.png";
  import onlineTest from "./../../assets/onlineTest.png"
  import openBook from "./../../assets/openBook.png";
  import analyst from "./../../assets/analyst.png"
  import sap from "./../../assets/sap.png";
  import { TrainingList } from "../../components/TrainingList";
  import {DeviceLaptopIcon, SnowflakeIcon, FolderSharedIcon, WrenchIcon} from "@exxonmobil/react-unity"


const Trading = () => {

    return(
        <>
        <HeroBlock backgroundImage={keyboard}>
  <HeroBlock.Body>
    <HeroBlock.Title>Welcome to Learning Hub</HeroBlock.Title>
    <HeroBlock.Description>
    Explore and expand your knowledge with our learning paths below in all aspects of ExxonMobil Energy Products and Trading IT.
    </HeroBlock.Description>
    <Button variant="primary">Hero CTA</Button>
  </HeroBlock.Body>
</HeroBlock>

<div className={Styles.list}>
<TrainingList Title="General" icon={openBook} todos={[{ task: "Onboarding Hub", done: false, link: "https://performancemanager4.successfactors.com/saml2/Login?company=exxonmobilP&RelayState=/sf/idp/SAML2/SSO/POST/company/exxonmobilP&bplte_company=exxonmobilP&_s.crb=Vp3fT%252b%252fV3Wp6DGnbzpxOMVLxUkbhKC0FnD4CXHI3N9Y%253d" },
    { task: "Awesome GoTo ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos"},
    { task: "Agile Introduction", done: false, link: "https://agilewiki.xom.cloud/wiki/Metrics_Videos" },]}/>
<TrainingList Title="Front End Developer" icon={onlineTest} todos={[{ task: "SAP Training", done: false, link: "https://open.sap.com/" },
    { task: "Awesome GoTo ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos"},
    { task: "Onboarding", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" },
    { task: "https://wiki.na.xom.com/index.php/Awesome_GoTos ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" }]}/>
<TrainingList Title="Snowflake Developer" icon={snowflake} todos={[{ task: "SAP Training", done: false, link: "https://open.sap.com/" },
    { task: "Awesome GoTo ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos"},
    { task: "Onboarding", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" },
    { task: "https://wiki.na.xom.com/index.php/Awesome_GoTos ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" }]}/>
<TrainingList Title="API Developer" icon={apiImg} todos={[{ task: "SAP Training", done: false, link: "https://open.sap.com/" },
    { task: "Awesome GoTo ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos"},
    { task: "Onboarding", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" },
    { task: "https://wiki.na.xom.com/index.php/Awesome_GoTos ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" }]}/>
<TrainingList Title="Hana Developer" icon={sap} todos={[{ task: "SAP Training", done: false, link: "https://open.sap.com/" },
    { task: "Awesome GoTo ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos"},
    { task: "Onboarding", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" },
    { task: "https://wiki.na.xom.com/index.php/Awesome_GoTos ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" }]}/>
<TrainingList Title="Analyst" icon={analyst} todos={[{ task: "SAP Training", done: false, link: "https://open.sap.com/" },
    { task: "Awesome GoTo ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos"},
    { task: "Onboarding", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" },
    { task: "https://wiki.na.xom.com/index.php/Awesome_GoTos ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" }]}/>
</div>

        </>
    );
}
export default Trading;
