import Typed from 'typed.js';
import React from 'react';
import styled from 'styled-components';

const Element = styled.span`
  text-align: center;
`;

const words = [
  'build <span class="underline">meaningful</span> <br class="sm:hidden" />nonprofits.',
  'learn new <span class="underline">skills</span>.',
  'volunteer their <br class="sm:hidden" /><span class="underline">own way</span>.',
  'lead their <br class="sm:hidden" /><span class="underline">communities</span>.',
  'launch <span class="underline">incredible</span> <br class="sm:hidden" />events.'
];

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      cursorChar: '|'
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
          style={{ whiteSpace: 'pre' }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}

export default Typing;
