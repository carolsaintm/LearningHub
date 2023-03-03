import {
    HeroBlock,
    Button,
  } from "@exxonmobil/react-unity";
  import React from "react";
  import keyboard from "../../assets/keyboard.jpg"
  import { Link } from "react-router-dom";
  import Styles from "./style.module.scss";
import { TrainingList } from "../../components/TrainingList";

const Gas = () => {

  
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

<TrainingList/>
        </>
    );
}

export default Gas;
