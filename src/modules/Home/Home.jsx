import {
    HeroBlock,
    Button,
    Card,
    SolidCard,
    User1Icon
  } from "@exxonmobil/react-unity";
  import React from "react";
  import keyboard from "../../assets/keyboard.jpg"

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
  <SolidCard compact>
    <a href="#">
      <SolidCard.Body>
        <SolidCard.Body.Icon>
          <User1Icon />
        </SolidCard.Body.Icon>
        <SolidCard.Body.Title link>Trading</SolidCard.Body.Title>
      </SolidCard.Body>
    </a>
    <SolidCard.Footer>
      Trading Learning hub
    </SolidCard.Footer>
  </SolidCard>
  <SolidCard compact>
    <a href="#">
      <SolidCard.Body>
        <SolidCard.Body.Icon>
          <User1Icon />
        </SolidCard.Body.Icon>
        <SolidCard.Body.Title link>Risk Management</SolidCard.Body.Title>
      </SolidCard.Body>
    </a>
    <SolidCard.Footer>
      Risk Management Learning hub
    </SolidCard.Footer>
  </SolidCard>

 
</Card.List>
        </>
    );
}

export default Home;
