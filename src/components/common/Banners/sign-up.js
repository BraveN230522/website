import React, { useState } from 'react';
import Icon from '@components/common/Icon';
import medal from '@public/svg/medal.svg';
import AuthenticationWidget from '@components/Authentication/AuthenticationWidget';
import Modal from '@components/common/Modal';
import { SignUpStyle, Copy, Heading, Paragraph, Medal, BannerButton, Close, Spacer, AbsCentre } from './styles';

const CloseButton = ({ children, onClick }) => <Close onClick={onClick}>{children}</Close>;

const SignUp = () => {
  const [hideBanner, setHideBanner] = useState(false);
  const closeBanner = () => setHideBanner(true);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Spacer hide={true} />
      <SignUpStyle hide={true}>
        <AbsCentre>
          <Medal src={medal} alt="Sign Up Medal Icon" width="30" />
          <Copy>
            <Heading>Let's make your next trip a memorable one.</Heading>
            <Paragraph>Get deals, inspiration and priority access</Paragraph>
          </Copy>
        </AbsCentre>
        <BannerButton variant="tertiary" onClick={() => setOpen(true)}>
          Sign up now
        </BannerButton>
        <CloseButton onClick={() => closeBanner()} className="nostyle">
          <Icon name="close" color="white" />
        </CloseButton>
      </SignUpStyle>
      <Modal isInitiallyOpened={isOpen} onClosing={() => setOpen(false)}>
        {onClose => <AuthenticationWidget closeWidget={onClose} title="Register" />}
      </Modal>
    </>
  );
};

export default SignUp;
