import React from 'react';
import styled from 'styled-components';

const code = 'let counter = 0;';
let counter = 0;

const Highlight = styled.span`
  background-color: yellow;
`;

const highlight = (str, end) => { 
  str = '<span class="highlight">' + 
      str.substr(0, end + 1) +
      '</span>' +
      str.substr(end + 1);
  return str;

  // str = '<Highlight>' + 
  // str.substr(0, end + 1) +
  // '</Highlight>' +
  // str.substr(end + 1);
  // return str;
}

const CodeContainer = () => (
  <div>
    <span id="code-challenge">{code}</span>
    <button
      onClick={
        () => {
          const codeContainer = document.querySelector('#code-challenge');
          console.log('innerHTML before highlight ', codeContainer.innerHTML);
          codeContainer.innerHTML = highlight(code, counter);
          console.log('innerHTML after highlight ', codeContainer.innerHTML);
          counter += 1;
        }
      }
    >
      Click me
    </button>
  </div>
);

export default CodeContainer;
