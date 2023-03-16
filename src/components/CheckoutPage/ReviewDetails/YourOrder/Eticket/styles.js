import styled from '@emotion/styled';
import Icon from '@components/common/Icon';

const EticketIcon = styled(Icon)`
  margin-left: 4px;
  transform: scale(0.7) translateY(3px);

  path,
  g,
  use {
    cursor: pointer;
    /* fill: #ff0000; */
  }
`;

const EticketText = styled.p`
  margin: 0;
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 16px;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  line-height: 21px;
  align-self: center;
  justify-self: end;

  svg:hover path {
    /* fill: ${({ theme }) => theme.colors.lightGrey}; */
  }

  a {
    /* color: ${({ theme }) => theme.colors.dark}; */
  }

  ${({ theme }) => theme.media.phone`
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.08px;
  `}

  ${({ flex }) => flex && `display: flex; align-items: center;`}
`;

export { EticketIcon, EticketText };
