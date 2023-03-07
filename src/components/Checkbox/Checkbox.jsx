import { useState } from "react";
import Styles from "./style.module.scss"
import { Link } from "react-router-dom";
import React from "react";


const App = () => {
  const [todos, setTodos] = useState([
    { task: "SAP Training", done: false },
    { task: "Awesome GoTo ", done: false },
    { task: "Onboarding", done: false },
    { task: "https://wiki.na.xom.com/index.php/Awesome_GoTos ", done: false },
  ]);

  const handleChange = (done, i) => {
    let tmp = todos[i];
    tmp.done = !done;
    let todosClone = [...todos];
    todosClone[i] = tmp;
    setTodos([...todosClone]);
  };

  return (

    <div className={Styles.list}>
  <h3>Trainings</h3>
  {todos.map(({ task, done }, i) => (
    <div className={Styles.checkboxwrapper11} key={i}>
      
        <input
          type="checkbox"
          onChange={() => handleChange(done, i)}
          checked={done}
          id={i}
        />
        <label htmlFor={i}><span className={Styles.text}> <Link to={'https://open.sap.com/'}>{task}</Link></span></label>
    </div>
  ))}
  <br></br>
<h6>Total Completed: {todos.filter((todo) => todo.done).length}</h6>
</div>
  );
};

export default App;

