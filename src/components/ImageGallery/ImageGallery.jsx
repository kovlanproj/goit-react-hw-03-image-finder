import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/api';

export class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      console.log('update: ', this.props.query);
      try {
        this.setState({ isLoading: true });

        const images = await getImages(this.props.query, this.state.page);
        this.setState({ images: images.hits, isLoading: false });
      } catch (error) {
        this.setState({ error: true, isLoading: false });
        console.log(error);
      }
    }
  }

  render() {
    return (
      <ImageGalleryList>
        {this.state.isLoading && <div>Loading</div>}
        {/* {this.state.images.length === 0 && <div>Images nod found</div>} */}
        {this.state.images.map(image => (
          <ImageGalleryItem
            image={image}
            webformatURL={image.webformatURL}
            key={image.id}
          />
        ))}
      </ImageGalleryList>
    );
  }
}
