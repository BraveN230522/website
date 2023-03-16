import styled from '@emotion/styled';

import HorizontalCardScroll from '@components/common/HorizontalCardScroll';

const TabMenuWrapper = styled('div')`
  margin-top: -0.5em;
  background: ${({ theme }) => theme.colors.black};
  padding-top: 1px;
  position: relative;
  z-index: 3;

  h3 {
    margin: 0;
  }
`;

const TabMenuContainer = styled('div')`
  ${({ theme }) => theme.setContainer()};

  padding-bottom: 64px;

  ${({ theme }) =>
    theme.generateBreakpoint(
      470,
      `
      padding-left: 16px;
      padding-right: 16px;
  `
    )}

  ul {
    transform: translateY(-70px);

    ${({ theme }) => theme.media.phone`
      transform: translateY(-90px);
    `}
  }

  ul + div {
    margin-top: -40px;

    ${({ theme }) => theme.media.phone`
      margin-top: -80px;
    `}

    padding-top: 1rem;

    /* temporary */
    min-height: 300px;
  }

  ${({ theme }) => theme.media.phone`
    padding: 0 12px 0;
  `}
`;

const EventCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 18px;
  margin-bottom: 2rem;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${({ theme }) => theme.media.phone`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const TopCities = styled(HorizontalCardScroll)`
  padding-top: 0;
  width: 100%;
  
  > div {
    padding: 0;
  }

  article {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    overflow-x: unset;

    a {
      margin: 0;
      min-width: 270px;
      width: 100%;

      ${({ theme }) => theme.media.tablet`
        min-width: 225px;
      `}

      ${({ theme }) => theme.media.phone`
        min-width: 200px;
      `}

      ${({ theme }) =>
        theme.generateBreakpoint(
          458,
          `
        min-width: 145px;
      `
        )};
    }

    ${({ theme }) =>
      theme.generateBreakpoint(
        1200,
        `
        grid-template-columns: repeat(3, 1fr);
      `
      )};

    ${({ theme }) => theme.media.phone`
      grid-template-columns: repeat(2, 1fr);
    `}
  }
`;

const EventText = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

export { TabMenuWrapper, TabMenuContainer, EventCardContainer, EventText, TopCities };
