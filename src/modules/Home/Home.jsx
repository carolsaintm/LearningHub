import {
    HeroBlock,
    Button,
    Card,
    SolidCard,
    User1Icon,
    Media,
    PictureCard
  } from "@exxonmobil/react-unity";
  import React from "react";
  import keyboard from "../../assets/keyboard.jpg"
  import { Link } from "react-router-dom";
  import Styles from "./style.module.scss";
  import gas from "./../../assets/gas.jpg";
  import trading from "./../../assets/trading.jpg";
  import lng from "./../../assets/lng.jpg";
  import risk from "./../../assets/risk.jpg"

const Home = () => {

    return(
        <>
<HeroBlock className={Styles.hero} backgroundImage={keyboard}>
    <HeroBlock.Body>
        <HeroBlock.Title className={Styles.herotext}>Welcome to Learning Hub</HeroBlock.Title>
        <HeroBlock.Description className={Styles.herotext}>
        Explore and expand your knowledge with our learning paths below in all aspects of ExxonMobil Energy Products and Trading IT.
    </HeroBlock.Description>
  </HeroBlock.Body>
</HeroBlock>


<div className={Styles.cardLayout}>
  <Link to="/Trading">
  <PictureCard  className={Styles.solidcard} backgroundImage={trading}>
      <PictureCard.Body>
        <PictureCard.Body.Title link>
          Trading 
        </PictureCard.Body.Title>
        <PictureCard.Body.Description>
          Trading learning resources
        </PictureCard.Body.Description>
      </PictureCard.Body>
    </PictureCard>
  </Link>
  
  <Link to="/RiskManagement">
  <PictureCard  className={Styles.solidcard} backgroundImage={risk}>
      <PictureCard.Body>
        <PictureCard.Body.Title link>
          Risk Management 
        </PictureCard.Body.Title>
        <PictureCard.Body.Description>
          Risk Management learning resources
        </PictureCard.Body.Description>
      </PictureCard.Body>
    </PictureCard>
  </Link>

  <Link to="/Gas">
<PictureCard  className={Styles.solidcard} backgroundImage={gas}>
      <PictureCard.Body>
        <PictureCard.Body.Title link>
          GGOT Flowing Gas 
        </PictureCard.Body.Title>
        <PictureCard.Body.Description>
          GGOT learning resources
        </PictureCard.Body.Description>
      </PictureCard.Body>
    </PictureCard>
  </Link>

  <Link to="/Lng">
  <PictureCard className={Styles.solidcard} backgroundImage={lng} >
      <PictureCard.Body>
        <PictureCard.Body.Title link>
          GGOT Lng 
        </PictureCard.Body.Title>
        <PictureCard.Body.Description>
          GGOT learning resources
        </PictureCard.Body.Description>
      </PictureCard.Body>
    </PictureCard>
  </Link>
</div>


        </>
    );
}

export default Home;
