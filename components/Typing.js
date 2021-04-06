import Typed from "typed.js";
import React, { Component } from "react";
import styled from "styled-components";

const Element = styled.span`
  text-align: center;
`;

const words = [
  "learn new skills.",
  "volunteer their own way.",
  "lead their communities.",
  "build impactful nonprofits.",
  "launch amazing events.",
];

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <Element
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}

export default Typing;
