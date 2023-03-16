import styled from '@emotion/styled';
import Media from '@components/common/Media';
import Icon from '@components/common/Icon';

const VideoListStyles = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
`;

const VideoListImage = styled(Media)`
  background-image: ${({ adviceImage }) => `url(${adviceImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  cursor: pointer;
  height: 140px;
  margin-right: 18px;
  min-width: 224px;
  width: 224px;

  &:last-child {
    margin-right: 0;
  }

  g,
  use {
    transition: all 0.3s ease-in;
    fill: #fff;
  }

  g:nth-of-type(3) use {
    fill: transparent;
  }

  &:hover {
    g:nth-of-type(3) > use {
      fill: ${({ theme }) => theme.colors.swiamBlue};
    }
  }
`;

const BtnVideoPlay = styled(Icon)`
  left: 50%;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export { VideoListStyles, VideoListImage, BtnVideoPlay };
