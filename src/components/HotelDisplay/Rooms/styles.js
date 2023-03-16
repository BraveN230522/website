import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Section from '@components/common/Section';
import More from '@components/common/More';
import Button from '@components/common/Form/Button';

const RoomStyles = styled.div`
  margin: 0;
  max-width: 587px;
  padding: 0;
  width: 100%;

  article {
    margin: 0;
  }
`;

const RoomsSection = styled(Section)`
  ${({ theme }) => theme.setContainer()};

  h1 {
    font-weight: 500;
  }

  article {
    align-items: flex-start;
    flex-direction: column;

    ${({ theme }) => theme.media.phone`
      padding: 0;
    `}
  }
`;

const RoomContent = styled.div`
  align-items: center;
  border: solid 1px ${({ theme }) => theme.colors.stone};
  border-radius: 8px;
  display: flex;
  height: 124px;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 34px 24px;
  width: 100%;
`;

const RommDetailsContent = styled.div`
  max-width: 250px;
  width: 100%;
`;

const dynamicVariants = ({ variant, theme }) =>
  ({
    bed: css`
      font-weight: 500;
      line-height: 21px;
    `,

    includesRoom: css`
      color: ${theme.colors.browGray};
      font-size: 14px;
      line-height: 19px;
    `,

    nights: css`
      font-size: 14px;
      line-height: 19px;
      margin-left: 17%;
    `,
  }[variant]);

const RoomDetails = styled.p`
  ${dynamicVariants};
  margin: 0;
`;

const MoreRooms = styled(More)`
  align-self: center;
  text-transform: uppercase;
`;

const RoomsButton = styled(Button)`
  width: 124px;
`;

export { RoomStyles, RoomsSection, RoomContent, RoomsButton, RommDetailsContent, RoomDetails, MoreRooms };
