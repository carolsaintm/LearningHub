import * as React from 'react';
import { Checkbox,
    SolidCard,
    Fieldset,
 } from "@exxonmobil/react-unity";
import Styles from "./style.module.scss";

const App = () => {
    const [checkedA, setCheckedA] = React.useState(true);
    const [checkedB, setCheckedB] = React.useState(true);
    const [checkedC, setCheckedC] = React.useState(false);
  return (
    <div>
      <SolidCard className={Styles.footer}>
        <h4>Trainings</h4>
    <Fieldset>
      <div label="Trainings" className={Styles.grid}>
        <Checkbox className={Styles.line}
          value="1"
          id="a"
          checked={checkedA}
          onChange={(checked) => setCheckedA(checked)}
        />
        <Checkbox className={Styles.line}
          value="2"
          label="Option B"
          id="b"
          checked={checkedB}
          onChange={(checked) => setCheckedB(checked)}
        />
        <Checkbox className={Styles.line}
          value="2"
          label="Option C"
          id="c"
          checked={checkedC}
          onChange={(checked) => setCheckedC(checked)}
        />
      </div>
</Fieldset>
    </SolidCard>
    </div>
  );
};

export default App;