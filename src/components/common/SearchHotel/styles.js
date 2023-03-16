import styled from '@emotion/styled';

import AutoComplete from '@components/common/AutoComplete';
import Select from '@components/common/Form/Select';
import Calendar from '@components/common/Form/Calendar';
import Button from '@components/common/Form/Button';

const HotelFiltersContainer = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.media.phone`
    flex-direction: column;
  `}
`;

const SelectWhereTo = styled(AutoComplete)`
  margin-right: 16px;

  input {
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 16px;
    max-width: 180px;

    ${({ theme }) => theme.media.phone`
      width: 100%;
      max-width: 100%;
    `};
  }

  ${({ theme }) => theme.media.phone`
    display: block;
    width: 100%;
    margin-bottom: 7px;
    margin-right: 0;
  `};

  & > div:nth-of-type(2) {
    width: 320px;
    z-index: 1;

    .css-dt9btx-InnerWrapper {
      width: 100%;
      padding-right: 0;
    }

    ul {
      border: none;
    }
  }
`;

const HotelCalendar = styled(Calendar)`
  .DateRangePicker:hover div {
    #startDateInputId,
    #endDateInputId,
    .DateRangePickerInput_arrow.DateRangePickerInput_arrow_1 {
      color: ${({ theme }) => theme.colors.white};
      ::placeholder {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    button > svg > g > path {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  .DateInput {
    display: inline;
  }

  & > div.DateRangePicker.DateRangePicker_1 {
    background-color: rgba(0, 0, 0, 0.3);

    .DateInput {
      width: 40%;
    }

    #startDateInputId,
    #endDateInputId {
      font-weight: 400;
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
  justify-content: center;

  ${({ theme }) => theme.media.phone`
    justify-content: space-between;
    margin-top: 12px;
  `}
`;

const HotelControlsContent = styled.div`
  align-items: center;
  display: flex;
  margin-right: 16px;

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
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 16px;
  font-weight: 500;
  font-weight: 400;
  line-height: 21px;
`;

const HotelSelect = styled(Select)`
  background-color: rgba(0, 0, 0, 0.3);
  background-position: 85% 50%;
  border-radius: 22.5px;
  font-weight: 400;
  margin-left: 16px;
  padding: 0 0 0 20px;
  text-align-last: left;
  width: 75px;

  ${({ theme }) => theme.media.phone`
    width: 84px;
  `}
`;

const HotelSearchRooms = styled(Button)`
  border: 2px solid;
  width: 200px;
  margin-top: 20px;
  background-color: transparent;
  &:hover {
    background-color: transparent;
    border-color: #fff;
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
`;

const TextHotelSearchRooms = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 16px;
  font-weight: 500;
  font-weight: 400;
`;

export {
  HotelFiltersContainer,
  SelectWhereTo,
  HotelCalendar,
  HotelAccommodationContainer,
  HotelControlsContent,
  HotelLabel,
  HotelSelect,
  HotelSearchRooms,
  TextHotelSearchRooms,
};
