import {
    SolidCard,
    Card,
    Switch,
    Field
  } from "@exxonmobil/react-unity";
    import React from "react";
    import { Link } from "react-router-dom";
    import Styles from "./style.module.scss";
    import Checkbox from "./../../components/Checkbox/Checkbox"



const TrainingList = (props) => {
    const [checkedA, setCheckedA] = React.useState(true);
    const [checkedB, setCheckedB] = React.useState(true);
    const [checkedC, setCheckedC] = React.useState(false);

    const [isMainOn, setIsMainOn] = React.useState(true);
    
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
      <Field className={Styles.switch}> 
    <Switch className={Styles.switch}
      label="To Do"
      active={!isMainOn}
      color="main"
      onClick={() => setIsMainOn(!isMainOn)}/>
  </Field>
  <h3 className={Styles.train}>Trainings</h3>
  <Checkbox todos={props.todos}/>
    </SolidCard>
  </Card.List>
          </>
      );
  }
  
  export default TrainingList;
  