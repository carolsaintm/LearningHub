import * as React from 'react';

const App = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        
      </label>

      <p>{checked.toString()}</p>
    </div>
  );
};

export default App;