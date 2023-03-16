import styled from '@emotion/styled';
import { css } from '@emotion/core';

const getCommonButton = css`
  border-radius: 50%;
  background: none;
  cursor: pointer;
  height: 26%;
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

const HotelDisplayCarousel = styled.div`
  div.BrainhubCarousel__container {
    height: 210px;
    margin-top: 40px;
  }

  div.BrainhubCarousel {
    position: relative;
  }

  button.BrainhubCarousel__arrows.BrainhubCarousel__arrowLeft {
    ${getCommonButton};
    border: 2px solid ${({ theme }) => theme.colors.white};
    left: 1%;
  }

  button.BrainhubCarousel__arrows.BrainhubCarousel__arrowRight {
    ${getCommonButton};
    border: 2px solid ${({ theme }) => theme.colors.white};
    right: 1%;
  }
`;

const RoomImages = styled.img`
  border-radius: 8px;
  height: 180px;
  max-width: 300px;
  width: 100%;
  object-fit: cover;
`;

export { HotelDisplayCarousel, RoomImages };
