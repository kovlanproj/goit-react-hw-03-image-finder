import { Li, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, webformatURL }) => {
  return (
    <Li>
      <Img src={webformatURL} alt="sdf" />
    </Li>
  );
};
