import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const mapStateToProps = store => (
  {
    codeChallenge: store.games.codeChallenge,
  }
);

const mapDispatchToProps = store => (
  {

  }
);

const Highlight = styled.span`
  background-color: yellow;
`;

const CodeContainer = () => (
  <div>
    <Highlight id="highlight">{code.substring(0, counter + 1)}</Highlight>
    <span>{code.substring(counter + 1)}</span>
    <button
      onClick={
        () => {
          counter += 1;
        }
      }
    >
      Click me
    </button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CodeContainer);
