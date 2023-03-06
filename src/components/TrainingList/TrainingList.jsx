import {
    HeroBlock,
    Button,
    SolidCard,
    LinkList,
    Toolbar,
    FileGenericIcon,
    Card,
    Fieldset,
    Grid,
    Field,
    PictureCard,
    StackedBlock
  } from "@exxonmobil/react-unity";
    import React from "react";
    import keyboard from "../../assets/keyboard.jpg"
    import { Link } from "react-router-dom";
    import Styles from "./style.module.scss";
    import Checkbox from "./../../components/Checkbox/Checkbox"
    import api from "./../../assets/api.png";
    import snowflake from "./../../assets/snowflake.png";
    import books from "./../../assets/books.jpg";
  

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
         <img src={api} alt="" />
        </div> 
        <SolidCard.Body.Title>{props.Title}</SolidCard.Body.Title>
      </SolidCard>
         <Checkbox/>
      {/* <Toolbar>
        <Toolbar.Item right>
          <Button.Group>
            <Button variant="primary" size="small">
              Add
            </Button>
            <Button variant="secondary" size="small">
              Edit
            </Button>
          </Button.Group>
        </Toolbar.Item>
      </Toolbar> */}
    </SolidCard>

  </Card.List>

          </>
      );
  }
  
  export default TrainingList;
  