import styled from '@emotion/styled';

import Header from '@components/Layout/Header';
import Offers from '@components/common/Offers';
import Section from '@components/common/Section';
import Button from '@components/common/Form/Button';
import HotelFeatures from './HotelFeatures';
import TopGuests from './TopGuests';

const HotelHeader = styled(Header)`
  min-height: 633px;
  :before {
    background: linear-gradient(180deg, #000000 8.85%, rgba(0, 0, 0, 0) 100%);
  }

  ${({ theme }) => theme.media.phone`
    min-height: 566px;
  `}
`;

const HotelSection = styled(Offers)`
  &:nth-of-type(1) {
    margin: 0 auto 30px;
  }
`;

const HotelSplitContainer = styled(Section)`
  margin-bottom: 62px;
  ${({ theme }) => theme.setContainer()};

  article {
    align-items: flex-start;
    justify-content: space-between;

    ${({ theme }) => theme.media.tablet`
      flex-direction: column;
    `}
  }
`;

const HotelFeaturesCustom = styled(HotelFeatures)`
  margin-bottom: 64px;
`;

const TopGuestsCustom = styled(TopGuests)``;

const HotelDisplayChooseRoom = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  button {
    width: 192px;
  }
`;

const HotelChooseRoom = styled(Button)`
  background: transparent;
  border: solid 2px ${({ theme }) => theme.colors.swiamBlue};
  border-radius: 19.5px;
  color: ${({ theme }) => theme.colors.swiamBlue};
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  height: 39px;
  line-height: 36px;
  text-align: center;
  transition: all 0.3s ease-in;
  width: 192px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.swiamBlue};
    background: ${({ theme }) => theme.colors.swiamBlue};
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
`;

export {
  HotelHeader,
  HotelSection,
  HotelSplitContainer,
  HotelFeaturesCustom,
  TopGuestsCustom,
  HotelDisplayChooseRoom,
  HotelChooseRoom,
};
