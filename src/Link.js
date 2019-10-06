import React from "react";

export default function Link(props) {
  return (
    <a
      className="App-link"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}
