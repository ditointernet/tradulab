import React, { useEffect, useContext } from 'react';

import { Context } from '../../context';

import './message.css';

const types = {
  ALERT: '#e71d36',
  SUCCESS: '#49b76d',
  NEUTRAL: 'white',
};

function createTimeout({ infinity, setMessage }) {
  if (!infinity) {
    setTimeout(() => {
      setMessage({ value: '', type: '' });
    }, 2500);
  }
}

function Message({ infinity }) {
  const {
    message: { value, type },
    setMessage,
  } = useContext(Context);

  useEffect(() => {
    createTimeout({ infinity, setMessage });
  }, []);

  return (
    <div
      className="Message"
      data-testid="MessageBox"
      style={{
        display: value ? 'flex' : 'none',
        boxShadow: `0 0 1em ${types[type]}`,
      }}
    >
      <button
        className="MessageButton"
        data-testid="MessageButton"
        onClick={() => setMessage({ value: '', type: '' })}
      >
        <span className="material-icons">close</span>
      </button>
      <strong
        data-testid="MessageText"
        style={{
          color: `${types[type]}`,
        }}
      >
        {value}
      </strong>
    </div>
  );
}

export default Message;
