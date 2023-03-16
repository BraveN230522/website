import loadingImage from '@images/loading.gif';
import { LoaderContainer, LoaderImage, LoaderCaption } from './style';

const Loader = () => (
  <LoaderContainer>
    <LoaderImage src={loadingImage} />
    <LoaderCaption></LoaderCaption>
  </LoaderContainer>
);

export default Loader;
