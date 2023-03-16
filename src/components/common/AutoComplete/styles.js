import styled from '@emotion/styled';

import Input from '@components/common/Form/Input';

const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SearchInput = styled(Input)`
  width: 100%;
`;

export { SearchWrapper, SearchInput };
