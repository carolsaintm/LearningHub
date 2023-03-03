import * as React from 'react';

const App = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
    <div className={Styles.line}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <label for='ch'>
  <a href='https://dottcon.com' target='conteudo'>Site</a>
      </label>
    </div>
  </div>
  );
};

export default App;

   ////<p>{checked.toString()}</p>