import styled from '@emotion/styled';
import { css } from '@emotion/core';

const CardStyles = styled.div`
  background-clip: border-box;
  background-color: ${({ dark, theme }) => (dark ? theme.colors.charcoal : theme.colors.white)};
  border: ${({ dark, theme }) => (dark ? 'none' : `1px solid ${theme.colors.stone}`)};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  min-height: 274px;
  position: relative;
  width: 100%;
  word-wrap: break-word;

  ${({ dark, theme }) =>
    !!dark &&
    `
    button {
      color: ${theme.colors.white};
    }
  `};
`;

const CardImg = styled.img`
  width: 100%;
  height: 137px;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  object-fit: cover;
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 12px 12px 14px;
  text-align: center;

  button {
    margin-top: 7px;
  }
`;

const CardTitle = styled.h1`
  display: block;
  color: ${({ dark, theme }) => (dark ? theme.colors.white : theme.colors.black)};
  font-family: ${({ theme }) => theme.fonts.DINAlternateBold};
  line-height: 21px;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 6px;
  letter-spacing: -0.1px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 40px;
`;

const CardDetails = css`
  display: block;
  font-weight: 500;
  margin-bottom: 3.5px;
`;

const CardDate = styled.span`
  ${CardDetails};
  font-family: ${({ theme }) => theme.fonts.DINAlternate};
  color: ${({ dark, theme }) => (dark ? theme.colors.white : theme.colors.black)};
  font-size: 11px;
  letter-spacing: -0.1px;
  line-height: 15px;
  opacity: 0.7;
`;

const CardLocal = styled.span`
  ${CardDetails};
  font-family: ${({ theme }) => theme.fonts.DINAlternate};
  color: ${({ dark, theme }) => (dark ? theme.colors.white : theme.colors.black)};
  font-size: 11px;
  letter-spacing: -0.1px;
  line-height: 15px;
  opacity: 0.6;
  height: 30px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardPriceWrapper = styled.p`
  color: ${({ dark, theme }) => (dark ? theme.colors.white : theme.colors.black)};
  font-size: 20px;
  font-weight: 300;
  line-height: 27px;
  letter-spacing: -0.14px;
  margin: 0;

  span {
    ${CardDetails};
    font-family: ${({ theme }) => theme.fonts.DINAlternate};
    display: inline-block;
    font-size: 8px;
    letter-spacing: -0.05px;
    line-height: 9px;
    opacity: 0.9;
    transform: translateY(-7px);
  }
`;

export { CardStyles, CardImg, CardBody, CardTitle, CardDate, CardLocal, CardPriceWrapper };
