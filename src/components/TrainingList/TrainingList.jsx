import {
    SolidCard,
    Card,
  } from "@exxonmobil/react-unity";
    import React from "react";
    import { Link } from "react-router-dom";
    import Styles from "./style.module.scss";
    import Checkbox from "./../../components/Checkbox/Checkbox"



const TrainingList = (props) => {
    const [checkedA, setCheckedA] = React.useState(true);
    const [checkedB, setCheckedB] = React.useState(true);
    const [checkedC, setCheckedC] = React.useState(false);
    
      return(
          <>
  <Card.List className={Styles.list}>
    <SolidCard className={Styles.card}>
      <SolidCard className={Styles.top}>
        <div className={Styles.icons}>
         <img src={props.icon} />
        </div> 
        <SolidCard.Body.Title>{props.Title}</SolidCard.Body.Title>
      </SolidCard>
         <Checkbox/>
    </SolidCard>
  </Card.List>
          </>
      );
  }
  
  export default TrainingList;
  