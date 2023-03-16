import styled from '@emotion/styled';

import EventTag from '@components/common/Form/Tag';

const OffersHeadFilter = styled.header`
  ${({ theme }) => theme.setContainer()};
  display: flex;
  width: 100%;

  ${({ theme }) => theme.media.tablet`
    display: block;
    overflow-x: scroll;
  `}

  ${({ theme }) => theme.media.phone`
    padding: 0 8px;
  `}
`;

const OffersTag = styled.div`
  display: flex;
  width: 85%;
  margin-bottom: 17px;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `}
`;

const OffersButtonTag = styled(EventTag)`
  margin-right: 15px;
`;

const FilterView = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 15%;

  ${({ theme }) =>
    theme.generateBreakpoint(
      1085,
      `
        display: none;
      `
    )};
`;

const ViewModeButton = styled.a``;

const TagsFilterContent = styled.section`
  height: 90%;
  width: 90%;
`;

const TagsFilterHeader = styled.header``;

const TagsFilterTitle = styled.h3`
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.15px;
`;

const TagsFilterBody = styled.article``;

const TagsFilterList = styled.ul`
  padding: 0;
`;

const TagsFilterListItem = styled.li`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
`;

const TagsFilterItem = styled.span`
  font-weight: 600;
  letter-spacing: -0.15px;
`;

const TagsFilterControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TagsFilterControl = styled.a`
  cursor: pointer;
`;

const TagsFilterquantity = styled.span`
  font-weight: 600;
  letter-spacing: -0.15px;
  margin: 0 10px;
  width: 20px;
  text-align: center;
  transform: translateY(2px);
`;

const TagsFilterFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const TagsFilterItemsClear = styled.a`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.15px;
  text-decoration: underline;
`;

export {
  OffersHeadFilter,
  OffersTag,
  OffersButtonTag,
  FilterView,
  ViewModeButton,
  TagsFilterContent,
  TagsFilterHeader,
  TagsFilterTitle,
  TagsFilterBody,
  TagsFilterList,
  TagsFilterListItem,
  TagsFilterItem,
  TagsFilterControlsContainer,
  TagsFilterControl,
  TagsFilterquantity,
  TagsFilterFooter,
  TagsFilterItemsClear,
};
