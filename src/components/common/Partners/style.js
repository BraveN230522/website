import styled from '@emotion/styled';

const PartnersStyles = styled.section`
  ${({ theme }) => theme.setContainer()};
`;

const PartnerTitle = styled.header`
  opacity: 0.5;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -0.15px;
  text-align: center;
  margin: 61px 0 46px;
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.media.phone`
    margin: 40px 0 17px;
  `}
`;

const PartnersContent = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 69px;
  align-items: center;
  overflow: auto;

  img {
    margin-left: 50px;
    min-width: max-content;

    &:first-of-type {
      margin-left: 0;
    }
  }

  ${({ theme }) => theme.media.phone`
    margin-bottom: 53px;
  `}
`;

export { PartnersStyles, PartnerTitle, PartnersContent };
