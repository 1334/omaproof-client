import React from 'react';
import styled from 'styled-components';

import '../../public/logo.svg';

const StyledLogo = styled.div`
  margin: 0;
  padding: 0;
  .svg-logo {
    filter: invert(1);
    height: 2.2rem;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <img src="logo.svg" alt="logo" className="svg-logo" />
    </StyledLogo>
  );
}

export default Logo;
