import styled from '@emotion/styled';

const CardHorizontalStyles = styled.div`
  a {
    background-clip: border-box;
    background-color: ${({ theme }) => theme.colors.whiteSmoke};
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    position: relative;
    width: 447px;
    text-decoration: none;
    &:hover {
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

const CardHorizontalImg = styled.img`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  object-fit: cover;
  max-width: 200px;
  min-width: 200px;
  max-height: 167px;
`;

const CardBody = styled.div`
  padding: 15px 20px;
  min-height: 166px;

  ${({ theme }) => theme.media.phone`
    padding: 10px 15px;
  `}
`;

const CardHorizontalTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 17px;
  font-weight: 700;
  line-height: 23px;
  margin-top: 0;
  margin-bottom: 12px;
  letter-spacing: -0.1px;
  text-overflow: ellipsis;
  /* overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical; */
`;

const CardHorizontalInfo = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Helvetica};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.08px;
  margin-bottom: 0;
  height: 65px;
  width: 208px;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.media.phone`
    max-width: 140px;
  `}
`;

export { CardHorizontalStyles, CardHorizontalImg, CardBody, CardHorizontalTitle, CardHorizontalInfo };
