import styled from '@emotion/styled';
import search from '@svg/search.svg';

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

const SearchBarStyles = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.4);
  border-radius: 25px;
  height: 50px;
  max-width: 760px;
  justify-content: center;

  ${({ theme }) => theme.media.phone`
    height: 45px;
    padding: 0 20px;
  `}
`;

const SearchInput = styled.input`
  border: none;
  background: url(${search}) no-repeat 18px center, ${({ theme }) => theme.colors.white};
  width: 80%;
  height: 100%; /* Fix safari */
  padding-left: 50px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  font-family: ${({ theme }) => theme.fonts.Inter};
  outline: none;
  font-size: 16px;

  ${({ theme }) => theme.media.phone`
      background: no-repeat 18px center, white;
      font-size: 12px;
      padding-left: 25px;
      width: 70%;
   `}
`;

const SearchDatePicker = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  box-shadow: -2px 0 11px 0 rgba(0, 0, 0, 0.13);
  color: ${({ theme }) => theme.colors.browGray};
  cursor: pointer;
  max-width: 280px;

  ${({ theme }) => theme.media.phone`
    max-width: 55px;
  `}
`;

const SearchButton = styled.button`
  width: 133px;
  height: 100%; /* Fix safari */
  cursor: pointer;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background: ${({ theme }) => theme.colors.swiamBlue};
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  transition: box-shadow ease-out 0.3s;
  box-shadow: inset 0px 0 0 ${({ theme }) => theme.colors.swiamDarkBlue};
  &:hover {
    box-shadow: inset 103px 0 0 ${({ theme }) => theme.colors.swiamDarkBlue};
  }
  img {
    width: 20px;
  }
  img {
    display: none;
  }
  span {
    display: block;
  }

  ${({ theme }) => theme.media.phone`
    width: 57px;

    img {    
      padding-top: 3px;
      display: inline-block;
    }
    span {
      display: none;
    }
  `}
`;

export { SearchBarStyles, SearchInput, SearchDatePicker, SearchButton, SearchWrapper };
