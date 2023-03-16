import React, { useState, useEffect } from 'react';

import Modal from '@components/common/Modal';

const Media = ({ children, modalContent, className }) => {
  const [modal, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, [modal]);

  const playVideo = () => setVisible(true);

  return (
    <>
      <div onClick={playVideo} className={className}>
        {children}
      </div>

      <Modal isInitiallyOpened={modal}>{() => modalContent}</Modal>
    </>
  );
};

export default Media;
