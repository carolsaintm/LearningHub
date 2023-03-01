import {
    HeroBlock,
    Button,
    Card,
    SolidCard,
    User1Icon
  } from "@exxonmobil/react-unity";
  import React from "react";
  import keyboard from "../../assets/keyboard.jpg"
  import { Link } from "react-router-dom";
  import Styles from "./style.module.scss";

const Home = () => {

    return(
        <>
        <HeroBlock backgroundImage={keyboard}>
  <HeroBlock.Body>
    <HeroBlock.Title>Welcome to Learning Hub</HeroBlock.Title>
    <HeroBlock.Description>
      This is some additional text that accompanies the headline, which could be
      used to provide a short description
    </HeroBlock.Description>
    <Button variant="primary">Hero CTA</Button>
  </HeroBlock.Body>
</HeroBlock>


<Card.List className={Styles.cardLayout}>

  <Link to="/Trading">
  <SolidCard compact>
      <SolidCard.Body>
        <SolidCard.Body.Icon>
          <User1Icon />
        </SolidCard.Body.Icon>
        <SolidCard.Body.Title link>Trading</SolidCard.Body.Title>
      </SolidCard.Body>
    <SolidCard.Footer>
      Trading Learning hub
    </SolidCard.Footer>
  </SolidCard>
  </Link>
  
  <Link to="/RiskManagement">
  <SolidCard compact>
      <SolidCard.Body>
        <SolidCard.Body.Icon>
          <User1Icon />
        </SolidCard.Body.Icon>
        <SolidCard.Body.Title link>RiskManagement</SolidCard.Body.Title>
      </SolidCard.Body>
    <SolidCard.Footer>
      Risk Management Learning hub
    </SolidCard.Footer>
  </SolidCard>
  </Link>
  
  <Link to="/GGOTGas">
  <SolidCard compact>
      <SolidCard.Body>
        <SolidCard.Body.Icon>
          <User1Icon />
        </SolidCard.Body.Icon>
        <SolidCard.Body.Title link>GGOTGas</SolidCard.Body.Title>
      </SolidCard.Body>
    <SolidCard.Footer>
      GGOT Flowing Gas Learning hub
    </SolidCard.Footer>
  </SolidCard>
  </Link>
</Card.List>
        </>
    );
}

export default Home;
