import styled from 'styled-components';

export const StyledIcon = styled.img<{ top?: string, right?: string,left?: string }>`
  position: absolute;  /* Default position */
  width: ${({ width }) => width || '26px'};  /* Default width */
  height: ${({ height }) => height || '26px'}; /* Default height */
  top: ${({ top }) => top || '30px'}; /* Top, default to 30px */
  right: ${({ right }) => right || '15px'}; /* Right, default to 15px */
  left: ${({ left }) => left || 'auto'}; /* Right, default to 15px */
`;
