import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Section from '@components/common/Section';

const PlayersSection = styled(Section)`
  margin-bottom: 40px;
  padding: 34px 0;

  header {
    ${({ theme }) => theme.setContainer()};
  }
`;

const PlayersStyles = styled.div`
  ${({ theme }) => theme.setContainer()};
  display: flex;
  overflow-x: scroll;
  width: 100%;
`;

const PlayersContainer = styled.div`
  cursor: pointer;
  margin-right: 31px;
  opacity: 0.6;
  width: 122px;
  transition: opacity ease-out 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const PlayersFigure = styled.figure`
  background-color: ${({ theme }) => theme.colors.nightRider};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  height: 122px;
  margin: 0;
  margin-bottom: 10px;
  overflow: hidden;
  transition: all ease-in 0.2s;
  width: 122px;
`;

const PlayersImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const GetCommonText = css`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.09px;
  line-height: 19px;
  text-align: center;
`;

const PlayersPosition = styled.p`
  ${GetCommonText};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  margin: 5px 0;
`;

const PlayersName = styled.p`
  ${GetCommonText};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  margin: 0;
  padding: 0 19px;
`;

export { PlayersSection, PlayersStyles, PlayersContainer, PlayersFigure, PlayersImage, PlayersPosition, PlayersName };
