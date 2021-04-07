import Typed from "typed.js";
import React, { Component } from "react";
import styled from "styled-components";

const Element = styled.span`
  text-align: center;
`;

const words = [
  'learn new <span class="underline">skills</span>.',
  'volunteer their <br class="sm:hidden" /><span class="underline">own way</span>.',
  'lead their <br class="sm:hidden" /><span class="underline">communities</span>.',
  'build impactful <br class="sm:hidden" /><span class="underline">nonprofits</span>.',
  'launch amazing <br class="sm:hidden" /><span class="underline">events</span>.',
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
