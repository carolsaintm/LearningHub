import { useEffect, useState } from "react";
import Styles from "./style.module.scss"
import { Link } from "react-router-dom";
import React from "react";


const Checkbox = (props) => {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    setTodos(props.todos)
  },[props])

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
  {todos.map(({ task, done, link}, i) => (
    <div className={Styles.checkboxwrapper11} key={i}>
      
        <input
          type="checkbox"
          onChange={() => handleChange(done, i)}
          checked={done}
          id={i}
        />
        <label htmlFor={i}><span className={Styles.text}> <Link to={link}>{task}</Link></span></label>
    </div>
  ))}
  <br></br>
<h6>Total Completed: {todos.filter((todo) => todo.done).length}</h6>
</div>
  );
};

export default Checkbox;

