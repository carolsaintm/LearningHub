import {
    HeroBlock,
    Button,
  } from "@exxonmobil/react-unity";
  import React from "react";
  import keyboard from "../../assets/keyboard.jpg"
  import Styles from "./style.module.scss";
  import { TrainingList } from "../../components/TrainingList";
  import snowflake from "./../../assets/snowflake.png";
  import apiImg from "./../../assets/apiImg.png";
  import onlineTest from "./../../assets/onlineTest.png"
  import openBook from "./../../assets/openBook.png";
  import sa from "./../../assets/sa.png";

const Lng = () => {

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
<TrainingList Title="General" icon={openBook} 
    todos={[{ task: "Onboarding Hub", done: false, link: "https://performancemanager4.successfactors.com/saml2/Login?company=exxonmobilP&RelayState=/sf/idp/SAML2/SSO/POST/company/exxonmobilP&bplte_company=exxonmobilP&_s.crb=Vp3fT%252b%252fV3Wp6DGnbzpxOMVLxUkbhKC0FnD4CXHI3N9Y%253d" },
    { task: "Awesome GoTo ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos"},
    { task: "EP&T IT Learning Hub", done: false, link: "https://jam4.sapjam.com/groups/qCopFlEYW0XJKJWvGLpLMI/overview_page/KAVmUAg0pA5Fv1vLDa4SWn"},
    { task: "Scrum Basics", done: false, link: "https://exxonmobil.plateau.com/learning/user/catalogsearch/catalogSearchDispatchAction.do?searchType=filteredSearch&keywords=23062" },
    { task: "ITPA ToolKit", done: false, link: "https://goto/ITPAtoolKit "},
    { task: "Learning Azure DevOps", done: false, link: "https://exxonmobil.plateau.com/learning/user/catalogsearch/catalogSearchDispatchAction.do?searchType=filteredSearch&keywords=Learning%20Azure%20DevOps"}
    ]}/>

<TrainingList Title="Front End Developer" icon={onlineTest} 
    todos={[{ task: "Github Onboarding", done: false, link: "https://goto/githubonboarding" },
    { task: "Github Essentials", done: false, link: "https://adamtheautomator.com/visual-studio-code-github-setup/"},
    { task: "Github Essentials", done: false, link: "https://www.youtube.com/watch?v=jWLUhHWXMT8" },
    { task: "Javascript Essential Training", done: false, link: "https://www.tutorialspoint.com/javascript/index.htm" }
    ]}/>

<TrainingList Title="API Developer" icon={apiImg} 
    todos={[{ task: "SAP Training", done: false, link: "https://open.sap.com/" },
    { task: "Azure Overview", done: false, link: "\\ap\dfs\BLR\EMIT-TLN\Training Videos\TLN_Training_Azure_Cloud_Fundamentals_Part 2.mp4"},
    { task: "Azure Learning Path", done: false, link: "https://gotocloud.xom.cloud/learning-paths-azure/" }
    ]}/>

<TrainingList Title="System Architect" icon={sa} 
    todos={[{ task: "Cloud Overview", done: false, link: "https://www.educba.com/cloud-computing-services/" },
        { task: "Cloud Overview pt.2", done: false, link: "https://ishareteam4.na.xom.com/sites/itoe/TechLead/_layouts/15/WopiFrame.aspx?sourcedoc={39B64595-E5F0-40FD-A7D2-636A3AE92DAE}&file=TLN-Cloud%20Fundamentals-2.pptx&action=default" },
    { task: "Architecture 101", done: false, link: "https://exxonmobil.plateau.com/learning/user/common/viewItemDetails.do?componentTypeID=COURSE&componentID=513004&revisionDate=1617635640000&catalogCurrencyCode=USD&returnLink=%2Flearning%2Fuser%2Fcatalogsearch%2FcatalogSearchDispatchAction.do%3FsearchType%3DfilteredSearch%26keywords%3D&backto=%2Flearning%2Fuser%2Fcatalogsearch%2FcatalogSearchDispatchAction.do%3FsearchType%3DfilteredSearch%26keywords%3D"},
    { task: "Architecture 201", done: false, link: "https://exxonmobil.plateau.com/learning/user/common/viewItemDetails.do?componentTypeID=COURSE&componentID=536006&revisionDate=1649069580000&catalogCurrencyCode=USD&returnLink=%2Flearning%2Fuser%2Fcatalogsearch%2FcatalogSearchDispatchAction.do%3FsearchType%3DfilteredSearch%26keywords%3D&backto=%2Flearning%2Fuser%2Fcatalogsearch%2FcatalogSearchDispatchAction.do%3FsearchType%3DfilteredSearch%26keywords%3D" },
    { task: "Subscription Owner Learning Path ", done: false, link: "https://gotocloud.xom.cloud/subscription-owner-learning-path/" },
    { task: "Architect Onboarding", done: false, link: "https://goto/ArchitectOnboarding" }
    ]}/>
    </div>
    </>
    );
}

export default Lng;