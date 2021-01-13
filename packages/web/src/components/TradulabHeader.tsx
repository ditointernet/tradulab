import React from 'react';

interface IHeader {
  children: React.ReactChild | React.ReactChild[];
}

const TradulabHeader: React.FC<IHeader> = (props) => {
  return (
    <div>
      <p>TRADULAB HEADER :)</p>
      {props.children}
    </div>
  );
};

export default TradulabHeader;
