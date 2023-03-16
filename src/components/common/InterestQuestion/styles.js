import styled from '@emotion/styled';
import Link from 'next/link';

const QuestionsContainer = styled.a`
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
  border-radius: 8px;
  display: flex;
  min-height: 102px;
  justify-content: space-between;
  margin-top: 24px;
  padding: 23px 17px;
  width: 100%;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}

  ${({ theme }) => theme.media.phone`
    margin-left: 12px;
    width: calc(100% - 24px);
  `}
`;

const QuestionsMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px;

  &:last-child {
    margin-right: 83px;
  }

  ${({ theme }) =>
    theme.generateBreakpoint(
      1194,
      `
      &:last-child {
        margin-right: 32px;
      }
  `
    )}

  ${({ theme }) =>
    theme.generateBreakpoint(
      1090,
      `
        &:last-child {
          margin-right: 0;
        }
    `
    )}

  ${({ theme }) => theme.media.tablet`
    justify-content: flex-start;
    margin-bottom: 32px;

    &:last-of-type {
      margin-bottom: 0;
    }
  `}
`;

const Tip = styled.p`
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 4px;
`;

const LocationIcon = styled.img`
  width: 48px;
  margin-right: 12px;
  cursor: pointer;

  use {
    fill: ${({ theme }) => theme.colors.white};
  }

  g,
  use {
    transition: all 0.3s ease-in;
  }

  &:hover {
    use {
      fill: ${({ theme }) => theme.colors.swiamBlue};
    }

    g[fill] {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

const ViewsAndReplies = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.6;
  font-family: ${({ theme }) => theme.fonts.Helvetica};
  font-size: 13px;
  line-height: 13px;
`;

export { QuestionsContainer, QuestionsMainContent, Tip, ViewsAndReplies, LocationIcon };
