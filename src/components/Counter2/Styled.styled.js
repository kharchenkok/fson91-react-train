import styled, { css, keyframes } from 'styled-components';
const pulse = keyframes`
  0% {
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

// const animation = (props) => css`
//   animation: ${pulse} ${`${props.$animationLength} infinite alternate`};
// `;

// export const PulseButton = styled.button`
//     ${animation};
//
// `;
export const PulseButton = styled.button`
  animation: ${pulse} ${'0.3s infinite alternate'};
`;
