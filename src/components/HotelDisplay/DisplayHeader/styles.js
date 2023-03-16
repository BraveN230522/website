import styled from '@emotion/styled';

import Hero from '@components/Layout/Hero';
import Header from '@components/Layout/Header';
import Select from '@components/common/Form/Select';
import Calendar from '@components/common/Form/Calendar';
import Button from '@components/common/Form/Button';

const HeroWithSpacing = styled(Hero)`
  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.DINAlternateBold};
    font-size: 41px;
    line-height: 50px;
    margin-top: 0;

    ${({ theme }) => theme.media.phone`
      font-size: 34px;
    `}
  }

  p:first-of-type {
    font-size: 14px;
    line-height: 19px;
    margin: 0 0 18px 0;
  }

  ${({ theme }) => theme.media.phone`
    margin-bottom: 34px;
    padding: 0 1rem;
  `}
`;

const HotelHeaderDetails = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const HotelResume = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 19px;
  max-width: 800px;
  text-align: left;
  width: 100%;
  margin: 0 !important;

  &.collapsed {
    max-height: calc(19px * 4);
    overflow: hidden;
    margin: 0 !important;
  }

  &.heading {
    text-align: center;
    padding-bottom: 16px;
  }

  ${({ theme }) => theme.media.phone`
    display: -webkit-box;
    overflow: hidden;
    padding: 0 12px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `}
`;

const HotelResumeExpand = styled.div`
  color: white;
  cursor: pointer;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;

  svg {
    margin-left: 5px;
  }

  ${({ theme }) => theme.media.phone`
    display: none;
  `}
`;

const HotelNights = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.15px;

  ${({ theme }) => theme.media.phone`
    display: none;
  `}
`;

const HotelBookNow = styled(Button)`
  margin: 20px 3px 64px;
  width: 160px;
  color: #2891ff;
  border: solid 2px #2891ff;

  &:hover {
    color: #2891ff;
  }

  ${({ theme }) => theme.media.phone`
    margin-bottom: 0;
  `}
`;

const HotelSearchButton = styled(Button)`
  margin: 20px 3px 64px;
  width: 160px;
  color: #2891ff;
  border: solid 2px #2891ff;
  &:hover {
    color: #2891ff;
  }

  ${({ disabled }) =>
    disabled
      ? `
    border: solid 2px grey;
    color: grey;
    cursor: auto;
    &:hover {
      color: grey;
    }
  `
      : ''}

  ${({ theme }) => theme.media.phone`
    margin-bottom: 0;
  `}
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 22px;
  font-weight: 400;
  line-height: 29px;
  padding: 0;
  text-align: left;
  display: inline-block;

  ${({ theme }) => theme.media.phone`
    padding: 0;
  `}
`;

const HotelFiltersContainer = styled.div`
  display: flex;
  justify-content: ${({ left }) => (left ? 'left' : 'center')};

  ${({ theme }) => theme.media.phone`
    flex-direction: column;
  `}
`;

const HotelCalendar = styled(Calendar)`
  .DateRangePicker {
    .DateRangePickerInput {
      min-width: 240px;
    }
    #startDateInputId,
    #endDateInputId,
    #startDateInputIdRooms,
    #endDateInputIdRooms {
      color: #000;
      cursor: crosshair;
    }
  }
  div {
    #startDateInputId,
    #endDateInputId,
    #startDateInputIdRooms,
    #endDateInputIdRooms,
    .DateRangePickerInput_arrow.DateRangePickerInput_arrow_1 {
      color: #000;

      ::placeholder {
        color: #000;
      }
    }

    button > svg > g > path {
      stroke: #000;
    }
  }
  /* .DateRangePicker:hover div {
    #startDateInputId,
    #endDateInputId,
    #startDateInputIdRooms,
    #endDateInputIdRooms,
    .DateRangePickerInput_arrow.DateRangePickerInput_arrow_1 {
      color: #000;

      ::placeholder {
        color: #000;
      }
    }

    button > svg > g > path {
      stroke: #000;
    }
  } */

  & > div.DateRangePicker.DateRangePicker_1 {
    // background-color: rgba(0, 0, 0, 0.3);
    border: solid 2px black;
    /* width: 300px; */

    .DateInput {
      width: 40%;
    }

    button > svg > g > path {
      stroke: #000;
    }

    #startDateInputId,
    #endDateInputId,
    #startDateInputIdRooms,
    #endDateInputIdRooms {
      font-weight: 400;
      color: black;
      cursor: pointer;
    }

    ${({ theme }) => theme.media.phone`
      justify-content: flex-start;
      padding-left: 9px;
    `};
  }
`;

const HotelAccommodationContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: ${({ align }) => align};

  ${({ theme }) => theme.media.phone`
    justify-content: space-between;
    margin-top: 12px;
  `}
`;

const HotelControlsContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 3px 0;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }

  > * {
    margin: 3px 0;
  }

  select {
    margin-left: 0;
    width: 140px;
  }
  select[data-index] {
    width: 70px;
  }

  &:nth-of-type(3) {
    margin-right: 0;
  }

  ${({ theme }) => theme.media.phone`
    margin-right: 0;

    &:nth-of-type(3) {
      display: none;
    }
  `}
`;

const HotelLabel = styled.label`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 16px;
  font-weight: 500;
  font-weight: 400;
  line-height: 21px;
`;

const HotelSelect = styled(Select)`
  background-color: white;
  background-position: 85% 50%;
  border-radius: 22.5px;
  font-weight: 400;
  margin-left: 16px;
  padding: 0 0 0 20px;
  text-align-last: left;
  width: 75px;
  color: black;
  border-color: black;

  ${({ theme }) => theme.media.phone`
    width: 84px;
  `}
`;

const ChildSelect = styled(HotelSelect)`
  width: 50px;
`;

const HotelHeader = styled.div`
  display: flex;
  justifycontent: space-between;
  ${({ theme }) => theme.media.phone`
    flex-direction: column;
  `}
`;

const HotelHeaderDetailsContainer = styled.div`
  width: 60%;
  ${({ theme }) => theme.media.phone`
    width: 100%;
  `}
  * {
    text-align: left;
  }
  svg {
    margin-right: 10px;
  }
`;

const HotelHeaderOptionsContainer = styled.div`
  width: 40%;
  ${({ theme }) => theme.media.phone`
    width: 100%;
  `}
  text-align: center;
`;

const HotelHeaderOptionsPanel = styled.div`
  background-color: white;
  padding: ${({ left }) => (left ? '20px 20px 20px 0' : '20px')};
  border-radius: 5px;
  display: inline-block;
  *:not(button) {
    color: black;
  }
  width: 90%;
  max-width: 450px;
`;

const ChildrenAges = styled.div``;

export {
  HeroWithSpacing,
  HotelHeaderDetails,
  HotelResume,
  HotelResumeExpand,
  HotelNights,
  HotelBookNow,
  SubTitle,
  HotelFiltersContainer,
  HotelCalendar,
  HotelAccommodationContainer,
  HotelControlsContent,
  HotelLabel,
  HotelSelect,
  ChildSelect,
  HotelHeader,
  HotelHeaderDetailsContainer,
  HotelHeaderOptionsContainer,
  HotelHeaderOptionsPanel,
  ChildrenAges,
  HotelSearchButton,
};
