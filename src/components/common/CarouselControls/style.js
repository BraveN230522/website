import styled from '@emotion/styled';

import carouselBack from '@public/svg/carousel-back.svg';
import carouselNext from '@public/svg/carousel-next.svg';

const ControlStyles = styled.div`
  display: flex;
  ${({ isMobile }) =>
    isMobile
      ? `
  align-items: center;
  justify-content: center;
  width: 50%;
  max-width: calc(100vw - 150px);`
      : 'padding-bottom: 30px;'}
`;

const ControlItem = styled.span`
  width: ${({ active }) => (active ? 31 : 13)}px;
  height: 5px;
  display: block;
  border-radius: 4px;
  background-color: ${({ theme, active, controlColor, activeColor }) =>
    activeColor && active ? theme.colors[activeColor] : theme.colors[controlColor]};
  margin-left: 4px;
  cursor: pointer;
  transition: all ease-in 0.2s;

  &:hover {
    width: 31px;
  }
`;

const ControlBackNext = styled.div`
  height: 60px;
  width: 60px;
`;
const ControlBack = styled(ControlBackNext)`
  background-image: url(${carouselBack});
  margin-right: 15px;
`;
const ControlNext = styled(ControlBackNext)`
  background-image: url(${carouselNext});
  margin-left: 15px;
`;

export { ControlItem, ControlStyles, ControlBack, ControlNext };
