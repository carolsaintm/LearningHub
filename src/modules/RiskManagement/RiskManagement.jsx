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
  import onlineTest from "./../../assets/onlineTest.png"
  import openBook from "./../../assets/openBook.png";
  import sap from "./../../assets/sap.png";
  import sa from "./../../assets/sa.png";

const RiskManagement = () => {

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
    { task: "Supply and Distribution - Process Overview", done: false, link: "https://mysite.na.xom.com/personal/sa_vlantun/Documents/Shared%20with%20Everyone/SAP%20community/Presentations/01%20-%20Supply%20chain%20process%20overview.pptx" },
    { task: "Energy Products and Trading Learning Hubs", done: false, link: "https://jam4.sapjam.com/groups/qCopFlEYW0XJKJWvGLpLMI/overview_page/KAVmUAg0pA5Fv1vLDa4SWn" },
    { task: "Team's Knowledge sharing ", done: false, link: "onenote:https://ishareteam3.na.xom.com/sites/SASDSSCM/ps/Shared%20Documents/Risk%20Management%20Team/" },
    { task: "System Landscape (Stripes and HANA)", done: false, link: "../../../../Training/01-Intro%2C%20STRIPES%2C%20GOM%2C%20HANA.mp4" },
    { task: "One day in Trading (Business Process)", done: false, link: "../../../../../../../../SASDSSCM/ps/Shared%20Documents/KT%20videos%20from%20Suhas/RM%20One%20Day%20in%20Trading.mp4" },
    { task: "One day in Risk Control (Business Process)", done: false, link: "../../../../../../../../SASDSSCM/ps/Shared%20Documents/KT%20videos%20from%20Suhas/RM%20One%20Day%20in%20Risk%20Control.mp4" },
    { task: "ADO board", done: false, link: "https://dev.azure.com/EMIT-FLCIT/Risk%20Management" },
    ]}/>

<TrainingList Title="Front End Developer" icon={onlineTest} todos={[{ task: "Github Onboarding", done: false, link: "https://goto/githubonboarding" },
    { task: "Github Essentials", done: false, link: "https://adamtheautomator.com/visual-studio-code-github-setup/"},
    { task: "Github Essentials", done: false, link: "https://www.youtube.com/watch?v=jWLUhHWXMT8" },
    { task: "Javascript Essential Training", done: false, link: "https://www.tutorialspoint.com/javascript/index.htm" }]}/>

<TrainingList Title="Snowflake Developer" icon={snowflake} todos={[{ task: "QLIK Essentials", done: false, link: "https://www.youtube.com/watch?v=5chKhiFdvoE" },
    { task: "QLIK Essentials", done: false, link: "https://www.youtube.com/watch?v=LuGu3qDGoJY"},
    { task: "QLIK Essentials", done: false, link: "https://medium.com/@karandama2006/test-drive-qlik-replicate-attunity-91ee87f424cc" },
    { task: "Cloud Computing Essentials", done: false, link: "https://www.guru99.com/cloud-computing-for-beginners.html"},
    { task: "Snowflake Guide", done: false, link: "https://docs.snowflake.com/en/guides-overview"},
    { task: "Snowflake Quick Start", done: false, link: "https://quickstarts.snowflake.com/"},
    { task: "Snowflake References", done: false, link: "https://docs.snowflake.com/reference"},
    { task: "Snowflake Self-Paced Training", done: false, link: "https://learn.snowflake.com/tracks"},
    { task: "Snowflake - Essentials", done: false, link: "https://www.snowflake.com/snowflake-essentials-training/?lang=ess"},
    { task: "Snowflake - Getting Started", done: false, link: "https://app.pluralsight.com/library/courses/snowflake-cloud-data-platform-getting-started/table-of-contents"},
    { task: "Snowflake - Architecture Overview", done: false, link: "https://app.pluralsight.com/library/courses/snowflake-architecture-overview-getting-started/table-of-contents"},
    { task: "Snowflake Performance (Caching)", done: false, link: "https://app.pluralsight.com/library/courses/query-caching-performance-features-snowflake/table-of-contents"},
    { task: "Snowflake Extension (SPs, UDFs, Secure views)", done: false, link: "https://app.pluralsight.com/library/courses/sql-extensibility-features-snowflake/table-of-contents"},
    { task: "Snowflake Advanced", done: false, link: "https://community.snowflake.com/s/education-services"},
    { task: "Snowflake Certification", done: false, link: "https://www.snowflake.com/certifications/"},
    ]}/>
<TrainingList Title="API Developer" icon={apiImg} todos={[{ task: "SAP Training", done: false, link: "https://open.sap.com/" },
    { task: "Azure Overview", done: false, link: "\\ap\dfs\BLR\EMIT-TLN\Training Videos\TLN_Training_Azure_Cloud_Fundamentals_Part 2.mp4"},
    { task: "Azure Learning Path", done: false, link: "https://gotocloud.xom.cloud/learning-paths-azure/" },
    { task: "Azure SQL (Queries)", done: false, link: "https://www.linkedin.com/learning/learning-azure-sql-querying/introduction?autoplay=true&u=2151522" },
    { task: "Building Data pipelines in MS Azure - Beginner Databricks", done: false, link: "https://app.pluralsight.com/id/?redirectTo=https%3A%2F%2Fapp.pluralsight.com%2Fpaths%2Fskills%2Fbuilding-data-pipelines-in-microsoft-azure" },
    { task: "Building Data pipelines in MS Azure - Intermediate ETL", done: false, link: "https://app.pluralsight.com/paths/skills/building-data-pipelines-in-microsoft-azure" },
    { task: "Building Data pipelines in MS Azure - Advanced ADF", done: false, link: "https://app.pluralsight.com/paths/skills/building-data-pipelines-in-microsoft-azure" },
    { task: "Python Essential Training", done: false, link: "https://www.linkedin.com/learning/python-essential-training-2/welcome?u=2151522" },
    { task: "Python Essential Training", done: false, link: "https://www.tutorialspoint.com/python/index.htm" },
    { task: "SQL with Python", done: false, link: "https://www.linkedin.com/learning/using-sql-with-python/use-sql-with-python?autoplay=true&u=2151522" },
    { task: "Python for Data Science", done: false, link: "https://www.linkedin.com/learning/python-for-data-science-tips-tricks-techniques/welcome?autoplay=true&u=2151522" },
    { task: "The World of APIs - Overview", done: false, link: "../../../../../../../../SASDSSCM/FLDigital/MediaLibrary/Media%20Library/DAS/Master%20Class/24%20-%20The%20World%20of%20APIs.mp4" },
    { task: "RESTful API", done: false, link: "https://ishareteam5.na.xom.com/sites/FLChemSol/FLBI/Foundation/Reference%20material/TLN_REST_API_CI_CD_Training.pptx" }]}/>

<TrainingList Title="ABAP Developer" icon={sap} todos={[{ task: "ABAP Tutorial", done: false, link: "https://www.guru99.com/abap-tutorial.html" },
    { task: "ABAP Language", done: false, link: "https://www.tutorialspoint.com/sap_abap/index.htm"},
    { task: "ABAP Essentials", done: false, link: "https://www.youtube.com/c/SimplilearnOfficial/search?query=abap" }]} />

<TrainingList Title="HANA Developer" icon={sap} todos={[{ task: "SAP HANA Fundamentals", done: false, link: "https://www.youtube.com/watch?v=ljdvqRtSHd4" },
    { task: "SAP HANA Fundamentals", done: false, link: "https://training.sap.com/course/ha100-sap-hana--360-introduction-classroom-017-us-en/?"},
    { task: "SAP HANA Essentials", done: false, link: "https://www.guru99.com/sap-hana-tutorial.html"},
    { task: "SAP HANA Modeling", done: false, link: "https://training.sap.com/course/ha300-sap-hana-20-sps05-modeling-classroom-017-us-en/?"},
    { task: "Data Modelling Fundamentals", done: false, link: "https://www.dataversity.net/dataed-webinar-data-modeling-fundamentals/" }]} />

<TrainingList Title="Analyst" icon={onlineTest} todos={[{ task: "SAP Training", done: false, link: "https://open.sap.com/" },
    { task: "PMR/PMR+ Essentials", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos"},
    { task: "Onboarding", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" },
    { task: "https://wiki.na.xom.com/index.php/Awesome_GoTos ", done: false, link: "https://wiki.na.xom.com/index.php/Awesome_GoTos" }]}/>

<TrainingList Title="System Architect" icon={sa} todos={[{ task: "Cloud Overview", done: false, link: "https://www.educba.com/cloud-computing-services/" },
    { task: "Architecture 101", done: false, link: "https://exxonmobil.plateau.com/learning/user/common/viewItemDetails.do?componentTypeID=COURSE&componentID=513004&revisionDate=1617635640000&catalogCurrencyCode=USD&returnLink=%2Flearning%2Fuser%2Fcatalogsearch%2FcatalogSearchDispatchAction.do%3FsearchType%3DfilteredSearch%26keywords%3D&backto=%2Flearning%2Fuser%2Fcatalogsearch%2FcatalogSearchDispatchAction.do%3FsearchType%3DfilteredSearch%26keywords%3D"},
    { task: "Architecture 201", done: false, link: "https://exxonmobil.plateau.com/learning/user/common/viewItemDetails.do?componentTypeID=COURSE&componentID=536006&revisionDate=1649069580000&catalogCurrencyCode=USD&returnLink=%2Flearning%2Fuser%2Fcatalogsearch%2FcatalogSearchDispatchAction.do%3FsearchType%3DfilteredSearch%26keywords%3D&backto=%2Flearning%2Fuser%2Fcatalogsearch%2FcatalogSearchDispatchAction.do%3FsearchType%3DfilteredSearch%26keywords%3D" }]}/>
</div>
        </>
    );
}

export default RiskManagement;
