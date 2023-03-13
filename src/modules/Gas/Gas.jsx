import {
    HeroBlock,
    Button,
  } from "@exxonmobil/react-unity";
  import React from "react";
  import keyboard from "../../assets/keyboard.jpg"
  import { Link } from "react-router-dom";
  import Styles from "./style.module.scss";
  import { TrainingList } from "../../components/TrainingList";
  import snowflake from "./../../assets/snowflake.png";
  import apiImg from "./../../assets/apiImg.png";
  import openBook from "./../../assets/openBook.png";
  import sap from "./../../assets/sap.png";

const Gas = () => {
  
    return(
        <>
        <HeroBlock backgroundImage={keyboard} alt="open notebook on a desk with a coffee mug beside it">
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
<TrainingList Title="Snowflake Developer" icon={snowflake} todos={[{ task: "Snowflake Solution Documentation", done: false, link: "https://tfs.xom.com/tfs/apps1/apps_dataanalytics/_wiki/wikis/APPS_DataAnalytics.wiki?wikiVersion=GBwikiMaster&pagePath=%2FSolutions%20%252D%20Downstream&pageId=987" },
    { task: "Learning Azure SQL Querying ", done: false, link: "https://www.linkedin.com/learning/learning-azure-sql-querying/introduction?u=2151522"},
    { task: "Onboarding", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" },
    { task: "https://wiki.na.xom.com/index.php/Awesome_GoTos ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" }]} />
<TrainingList Title="API Developer" icon={apiImg} todos={[{ task: "The World of APIs - Overview", done: false, link: "https://ishareteam3.na.xom.com/sites/SASDSSCM/FLDigital/MediaLibrary/Media%20Library/DAS/Master%20Class/24%20-%20The%20World%20of%20APIs.mp4" },
    { task: "Restful API", done: false, link: "https://ishareteam5.na.xom.com/sites/FLChemSol/FLBI/Foundation/Reference%20material/TLN_REST_API_CI_CD_Training.pptx"},
    { task: "Onboarding", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" },
    { task: "https://wiki.na.xom.com/index.php/Awesome_GoTos ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" }]}/>
<TrainingList Title="HANA Developer" icon={sap} todos={[{ task: "SAP Training", done: false, link: "https://open.sap.com/" },
    { task: "Learning Azure SQL Querying", done: false, link: "https://www.linkedin.com/learning/learning-azure-sql-querying/introduction?u=2151522"},
    { task: "Onboarding", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" },
    { task: "https://wiki.na.xom.com/index.php/Awesome_GoTos ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" }]}/>
</div>
        </>
    );
}

export default Gas;
