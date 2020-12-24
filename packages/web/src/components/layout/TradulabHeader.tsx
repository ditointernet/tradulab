import React from "react";

const TradulabHeader: React.FC = (props) => {
  return (
    <div>
      <p>TRADULAB HEADER :)</p>
      {props.children}
    </div>
  );
};

export default TradulabHeader;
