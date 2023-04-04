import React, { useState, useRef } from 'react';

import SimpleReactValidator from 'simple-react-validator';

function Form() {
  const [Username, setUsername] = useState('');
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSave = () => {
    const formValid = simpleValidator.current.allValid();
    console.log('saving...', { Username });
    if (!formValid) {
      console.log('form not valid...');
      simpleValidator.current.showMessages();
      forceUpdate(1);
    }
  };

  return (
    <div style={
        {
            textAlign: "center",
            fontSize: '25px'
        }
    }>
      <input
        name="Username"
        type="input"
        value={Username}
        onChange={handleChange}
        placeholder="enter Username"
      />
      {simpleValidator.current.message('Username', Username, 'required')}

      <div>Welcome {Username}!!!!</div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Form;
