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
<TrainingList Title="General" icon={openBook} />
<TrainingList Title="Front End Developer" icon={onlineTest}/>
<TrainingList Title="API Developer" icon={apiImg}/>
<TrainingList Title="System Architect" icon={sa}/>
</div>
        </>
    );
}

export default Lng;