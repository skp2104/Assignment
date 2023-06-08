import React from 'react';

const Multiselect = ({ value, readonly }) => {
  return (
    <>
      <div>Select Option:</div>
      {value.map((item) => (
        <div>
          <label>
            <input type='checkbox' defaultChecked='true' disabled={readonly} />
            Option {item}
          </label>
        </div>
      ))}
    </>
  );
};

export default Multiselect;
