import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SocialButton from '@components/common/SocialButton';

const SocialSection = styled.section`
  display: flex;
  flex-direction: column;

  padding: 16px 0;

  ${({ theme }) => theme.media.phone`
    padding: 48px 0;
  `};
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.phone`
    flex-direction: column;
    
    button:last-of-type {
      margin-bottom: 0;
    }
  `};
`;

const commonSocialButton = css`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;

  padding: 0;
  margin: 0;
  margin-bottom: 10px;

  > img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  background: transparent;

  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
  border-radius: 25px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledSocialButton = styled(SocialButton)`
  ${commonSocialButton}
  font-family: ${({ theme }) => theme.fonts.Inter};
  border-color: ${({ theme }) => theme.colors.browGray};
  ${({ theme }) => theme.media.phone`
    border-width: 1px;
  `};
`;

const GmailButton = styled.button`
  ${commonSocialButton}
  font-family: ${({ theme }) => theme.fonts.Inter};
  border-color: ${({ theme }) => theme.colors.browGray};
  ${({ theme }) => theme.media.phone`
    border-width: 1px;
  `};
`;

const SectionTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.Inter}
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  
  height: 16px;
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
  box-sizing: border-box;

  color: ${({ theme }) => theme.colors.black};

`;

export { SocialSection, Social, StyledSocialButton, SectionTitle, GmailButton };
