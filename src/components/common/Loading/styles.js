import styled from '@emotion/styled';

const Loading = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  z-index: 3;

  img {
    top: 50%;
    position: relative;
    transform: translateY(-50%);
  }
`;

export { Loading };
