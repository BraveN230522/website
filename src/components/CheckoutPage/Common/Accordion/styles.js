import styled from '@emotion/styled';

const AccordionStyles = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.stone};
  margin-bottom: 27px;
  padding-bottom: 23px;
  width: 100%;
`;

const Header = styled.header`
  align-items: center;
  display: flex;
  position: relative;
  margin-bottom: 11px;

  &:after {
    content: '';
    width: 0px;
    height: 0px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid #2891ff;
    position: absolute;
    right: 20px;
    z-index: 100;
    pointer-events: none;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 21px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.14px;
  margin: 0 0 0 26px;
`;

const AccordionSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const AccordionContent = styled.article``;

export { AccordionStyles, Header, Title, AccordionContent, AccordionSelect };
