import React from 'react';
import styled from '@emotion/styled';

import calendarIcon from '@svg/calendar.svg';
import prevIcon from '@svg/prev.svg';
import nextIcon from '@svg/next.svg';

import LightCalendarIcon from '@components//common/Icon/Icons/calendar';

const StyledWrapperProvider = styled.div`
  position: relative;
  padding-left:  16px;
  min-width:100px;

  .DateRangePicker.DateRangePicker_1 {
    width: 100%;
    cursor: pointer;
  }
  
  ${({ theme }) => theme.media.phone`
    padding-right: 16px;
    min-width:80px;
  `};
  
  ${({ lightMode, theme }) =>
    lightMode &&
    `
    display: flex;
    justify-content: center;
    padding: 0;
    text-align: left;
    padding-left: 0;
    ${theme.media.phone`
      padding-right: 0;
    `}
  `};
  .DateRangePickerInput_calendarIcon {
    margin: 0;
    padding: 0;   
    display: inline-block;
    width: 34px;
  }

  .DayPicker_transitionContainer {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    max-width: 600px;
    max-height: 320px;
    background: transparent;
    border-radius: 16px;
  }

  .DateRangePicker_picker.DateRangePicker_picker_1 {
     margin-left: 15%  !important;
    ${({ theme }) =>
      theme.generateBreakpoint(
        768,
        `
        `
      )};
      ${({ theme }) =>
        theme.generateBreakpoint(
          1024,
          `
      `
        )};
      ${({ theme }) =>
        theme.generateBreakpoint(
          1280,
          `
      `
        )};
    ${({ theme }) =>
      theme.generateBreakpoint(
        280,
        `
      `
      )};
    ${({ theme }) =>
      theme.generateBreakpoint(
        360,
        `
      `
      )};
      ${({ theme }) =>
        theme.generateBreakpoint(
          375,
          `
        `
        )};
      ${({ theme }) =>
        theme.generateBreakpoint(
          540,
          `
        `
        )};
      
  }

  .DateRangePicker {
    
    ${({ theme, lightMode, hasStartDate }) =>
      lightMode &&
      `
      border: 2px solid ${theme.colors.white};
      border-radius: 25px;
      width: ${hasStartDate ? '320px' : '198px'};
      display: flex;
      height: 45px;
      justify-content: center;
      align-items: center;

      padding-left: 12px;
      ${theme.media.phone` padding-left: 0; `};

      input {
        text-align: center;
        padding-top: 4px;
        background-color: ${lightMode ? 'transparent' : theme.colors.white};
      }

      :hover {
        background-color: ${theme.colors.white};

        button > svg > g > path {
          stroke: ${theme.colors.black};
        }

        #startDateInputId,
        #endDateInputId {
          color: ${lightMode ? theme.colors.black : theme.colors.browGray};
          ::placeholder {
            color: ${lightMode ? theme.colors.black : theme.colors.browGray};
            opacity: 1;
          }

        }

        .DateRangePickerInput_arrow.DateRangePickerInput_arrow_1 {
          color: ${lightMode ? theme.colors.black : theme.colors.browGray};
        }
      }
    `}
  }

  .DateRangePickerInput_arrow.DateRangePickerInput_arrow_1 {
    font-weight: ${({ lightMode }) => (lightMode ? 600 : 400)};
  }

  .DateRangePicker_picker {
    background-color: transparent;
    margin-top: 10px;
    ${({ theme }) => theme.media.phone`
      margin-top: -15px;
    `}
    ${({ theme }) => theme.media.tablet`
      margin-top: 2px;
    `}
  }

  .DateRangePickerInput {
    border: none;
    background: transparent;
  }

    ${({ lightMode, hasEndDate }) =>
      lightMode &&
      `

      #startDateInputId {
        width: 160px;
        margin-right: ${hasEndDate ? '0px' : '40px'};

      }
      
      #endDateInputId {
        width: ${hasEndDate ? '120px' : '80px'};
        margin-left: ${hasEndDate ? '0px' : '10px'};
      }
    `}

  #startDateInputId,
  #endDateInputId {
    border: none;

    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.Inter};
    color: ${({ theme, lightMode }) => (lightMode ? theme.colors.white : theme.colors.black)};
    letter-spacing: -0.11px;
    font-weight: ${({ lightMode }) => (lightMode ? 600 : 400)};

    ::placeholder {
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.Inter};
      color: ${({ theme, lightMode }) => (lightMode ? theme.colors.white : theme.colors.browGray)};
      letter-spacing: -0.11px;
      opacity: 1;
      ${({ theme }) => theme.media.phone`
      font-size: 12px;
      font-family: ${() => theme.fonts.Inter};
    `};
    }

    &:focus {
      box-shadow: 0 4px 2px -2px ${({ theme, hasStartDate }) =>
        hasStartDate ? theme.colors.swiamBlue : 'transparent'};
    }
  }

  .DateInput {
    background-color: ${({ theme, lightMode }) => (lightMode ? 'transparent' : theme.colors.white)};

    width: 42%;
    ${({ hasStartDate, lightMode }) =>
      !hasStartDate &&
      `
      width: ${lightMode ? '70%' : '80%'};
      
      &:last-of-type {
        display: none;
      }
    `}
  }
  .DateInput {
    ${({ theme }) => theme.media.phone` display: none; `};
  }
  .DateRangePickerInput_arrow {
    color: ${({ theme, lightMode }) => (lightMode ? theme.colors.white : theme.colors.black)};
    ${({ theme }) => theme.media.phone` display: none; `};
    ${({ hasStartDate }) => !hasStartDate && ` display: none; `}
  }

   margin: 0;
  }

  .DateInput_fang.DateInput_fang_1 {
    display: none;
  }

  .DayPicker {
    border: 2px solid ${({ theme }) => theme.colors.stone};
    border-radius: 16px;
    box-sizing: border-box;

    &::before {
      content: '';
      position: absolute;
      left: calc(50% + 3px);
      top: -1px;
      z-index: 2;
      width: 2px;
      height: calc(100% + 2px);
      background-color: ${({ theme }) => theme.colors.stone};
      ${({ theme }) => theme.media.phone`
        display: none;
      `};
    }
    ${({ theme }) => theme.media.phone`
        display: flex;
        padding: 0 0px;
        margin-left: 20px;
        margin-right: 20px;
        width: fit-content;

    `};
  }

  .CalendarMonth_caption {
    padding-top: 12px;
    font-family: ${({ theme }) => theme.fonts.Inter};
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 24px;
    text-align: center;

    color: ${({ theme }) => theme.colors.greyishBrown};

    strong {
      font-weight: 500;
    }
  }

  .DayPicker_weekHeader {
    top: 46px;
  }

  .DayPicker_weekHeader_li {
    visibility: hidden;
    font-size: 0;
  }
  .DayPicker_weekHeader_li::first-letter {
    visibility: visible;
    font-family: ${({ theme }) => theme.fonts.Inter};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;

    color: rgba(0, 0, 0, 0.38);
  }

  .CalendarMonth_table.CalendarMonth_table_1 {
    margin-top: 0px;
  }

  .CalendarDay {
    font-family: ${({ theme }) => theme.fonts.Inter};
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
     width: 30px;
     ${({ theme }) => theme.media.phone`
        width: 2px;
      `};
  }

  // Will edit everything selected including everything between a range of dates
  .CalendarDay__selected_span {
    background: ${({ theme }) => theme.colors.swiamBlueHover};
    color: ${({ theme }) => theme.colors.white};
  }

  // Will edit selected date or the endpoints of a range of dates
  .CalendarDay__selected {
    background: ${({ theme }) => theme.colors.swiamBlue};
    color: ${({ theme }) => theme.colors.white};
  }

  // Will edit when hovered over. _span style also has this property
  .CalendarDay__selected:hover {
    background: ${({ theme }) => theme.colors.swiamBlue};
    color: ${({ theme }) => theme.colors.white};
  }

  // Will edit when the second date (end date) in a range of dates
  // is not yet selected. Edits the dates between your mouse and said date
  .CalendarDay__hovered_span:hover,
  .CalendarDay__hovered_span {
    background: ${({ theme }) => theme.colors.swiamBlueHover};
  }

  .CalendarDay__default {
    border: none;
    color: ${({ theme }) => theme.colors.black};
  }

  table {
    border-spacing: 0 3px;
    border-collapse: separate;
  }

  .CalendarDay.CalendarDay__firstDayOfWeek {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
  .CalendarDay.CalendarDay__lastDayOfWeek {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }

  // Set continuity between start and end dates
  .CalendarDay.CalendarDay__selected_start.CalendarDay__selected,
  .CalendarDay.CalendarDay__selected_end.CalendarDay__selected {
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};

    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0px;
      bottom: 0px;
      z-index: 2;
      width: 10px;
      background-color: ${({ theme }) => theme.colors.swiamBlueHover};
    }
  }
  .CalendarDay.CalendarDay__selected_end.CalendarDay__selected {
    &::before {
      left: 0px;
    }
  }
  .CalendarDay.CalendarDay__selected_start.CalendarDay__selected {
    &::before {
      right: 0px;
    }
  }

  .CalendarDay__blocked_out_of_range,
  .CalendarDay__blocked_out_of_range:active,
  .CalendarDay__blocked_out_of_range:hover {
    color: ${({ theme }) => theme.colors.stone};
    cursor: not-allowed;
  }

  .CalendarDay__selected_span {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;

    &.__last-day-of-month__ {
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    }
  }

  .CalendarDay__selected_span,
  .CalendarDay__selected_start {
    ~ .CalendarDay__selected_span {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

const Arrow = styled.img`
  position: absolute;
  top: 6px;
  padding: 14px 28px;

  ${({ prev }) =>
    prev &&
    `
    left: 0px;
  `}

  ${({ next }) =>
    next &&
    `
    right: 0px;
  `}
`;

const NavPrev = () => <Arrow src={prevIcon} alt="prev" prev />;
const NavNext = () => <Arrow src={nextIcon} alt="next" next />;
const CalendarImage = ({ lightMode }) => {
  if (lightMode) {
    return <LightCalendarIcon />;
  }

  return <img src={calendarIcon} alt="calendar" />;
};

export { StyledWrapperProvider, NavPrev, NavNext, CalendarImage };
