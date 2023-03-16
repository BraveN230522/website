import styled from '@emotion/styled';

const NavigationWrapper = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;

  /* .CurrencyIcon:hover {
    .CurrencyModal {
      display: block;
    }
  } */
`;

const NavigationItem = styled.li`
  margin-left: 21px;
  cursor: pointer;
  position: relative;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-child {
    display: none;
  }

  img {
    transition: ease-out 0.3s transform;
  }

  &:hover img {
    transform: scale(0.9);
  }

  ${({ items, theme }) =>
    items &&
    `
    &:before {
      content: "${items}";
      position: absolute;
      width: 18px;
      height: 18px;
      background: ${theme.colors.error};
      z-index: 3;
      top: -6px;
      color: ${theme.colors.white};
      font-weight: 600;
      right: -6px;
      border-radius: 50%;
      text-align: center;
      line-height: 17px;
      font-size: 12px;
    }
  `}

  ${({ theme }) => theme.media.tablet`
    &:nth-of-type(2) {
      transform: scale(1.3);
      margin-right: 14px;
      margin-top: 2px;
    }

    &:last-child {
      display: block;
    }
  `}
`;

const CurrencyModal = styled.div`
  width: 200px;
  position: absolute;
  right: 0;
  z-index: 99;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
  /* display: none; */
  display: ${({ openCurrency }) => (openCurrency ? 'block' : 'none')};
  h3 {
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 0px;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    user-select: none;
  }

  li:hover {
    background-color: #ebf3f5;
    cursor: pointer;
  }

  li.active {
    background-color: #ebf3f5;
  }
`;

export { NavigationWrapper, NavigationItem, CurrencyModal };
