import React from "react";
import "./topic.scss";

const Topic = props => {
  return (
    <a href={props.url} className="topic">
      {props.children}
    </a>
  );
};

export default Topic;
