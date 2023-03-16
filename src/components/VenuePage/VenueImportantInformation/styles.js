import styled from '@emotion/styled';

import Dropdown from '@components/common/Dropdown';

export const VenueInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 16% auto;
  grid-column-gap: 30px;
  align-items: center;

  ${({ theme }) => theme.media.phone`
    grid-template-columns: 100%;
    margin-top: -2rem;

    img {
      display: none;
    }

    h4 {
      margin-bottom: 0;
    }

    p {
      grid-column-start: 1;
      grid-column-end: 3;
      margin-bottom: 2.4rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  `}
`;

export const VenueDropdown = styled(Dropdown)`
  margin-bottom: 72px;

  ${({ theme }) => theme.media.phone`

  svg:first-of-type {
    display: none;
  }
  `}
`;
