import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Button from '@components/common/Form/Button';

const NoTicketsSection = styled.article`
  margin: 0 auto;
  max-width: 740px;
  width: 100%;

  ${({ theme }) => theme.media.phone`
    padding-left: 16px;
    padding-right: 16px;
  `};
`;

const NoTicketsHeading = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Inter};
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  line-height: 46px;
  margin: 80px 0 0 0;

  ${({ theme }) => theme.media.phone`
    font-size: 24px;
  `}
`;

const NoTicketsText = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Inter};
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  line-height: 30px;
  margin: 30px 0 20px 0;

  ${({ theme }) => theme.media.phone`
    font-size: 24px;
  `}
`;

const EmailButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  > div {
    width: calc(50% - 10px);

    ${({ theme }) => theme.media.phone`
     width: 100%;
    `};
  }

  ${({ theme }) => theme.media.phone`
    display: block;

    input {
      margin-bottom: 16px;
    }
 `};
`;

const EmailButton = styled(Button)`
  font-weight: 500;
  width: 198px;

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
       width: 100%;
      `
    )}
`;

const NoTicketsAvailable = ({ message }) => {
  // const messageText =
  //   message ||
  //   'We don`&apos`t have anything on hand at the moment, but there may still be availability. Please call us ' +
  //     'on +61 3 6111 6111 3513 with the details of your requirements and we will follow it up for you.';
  const messageText =
    'We don’t currently have tickets displaying for this event, but we can look into more options for you.\nTap the button below to send a request to our team.';
  return (
    <NoTicketsSection>
      <NoTicketsHeading>Contact us about this one 🎟</NoTicketsHeading>
      {/* <NoTicketsText dangerouslySetInnerHTML={{ __html: messageText }} /> */}
      <NoTicketsText>
        We don’t currently have tickets displaying for this event, but we can look into more options for you.
        <br />
        <br />
        Tap the button below to send a request to our team.
      </NoTicketsText>
      <EmailButtonContainer>
        <a href="https://app.monstercampaigns.com/c/t7koaltuygccddkt155r/" target="_blank" rel="noopener noreferrer">
          <EmailButton>Help me get there</EmailButton>
        </a>
      </EmailButtonContainer>
    </NoTicketsSection>
  );
};

export default NoTicketsAvailable;
