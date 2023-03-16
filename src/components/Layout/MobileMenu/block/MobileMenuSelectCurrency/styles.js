import styled from '@emotion/styled';

export const MenuSelectCurrencyStyles = styled.div`
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
