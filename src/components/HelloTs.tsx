import React from "react";

interface Props{
  message : string
}

const HelloTs:React.FunctionComponent<Props> = (props) => {
  return <h2>{props.message}</h2>;
};

export default HelloTs;
