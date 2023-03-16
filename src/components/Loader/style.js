import styled from '@emotion/styled';

const LoaderContainer = styled.figure`
  background: #fff;
  position: fixed;
  height: 100vh;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  font-size: 1.3rem;
  z-index: 10;
`;

const LoaderImage = styled.img`
  width: 80px;
  margin-bottom: 1rem;
`;

const LoaderCaption = styled.figcaption`
  padding-left: 1rem;
`;

export { LoaderContainer, LoaderImage, LoaderCaption };
