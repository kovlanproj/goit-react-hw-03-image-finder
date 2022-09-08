import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Button } from '../Button/Button';

export class ImageGallery extends Component {
  state = {
    images: [],
    totalHits: 0,
    isLoading: false,
    page: 1,
    error: false,
    visibleBtn: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery) {
      this.setState({ images: [], page: 1 });
    }

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      try {
        this.setState({ isLoading: true });
        const images = await getImages(nextQuery, nextPage);
        this.setState(state => ({
          images: [...state.images, ...images.hits],
          isLoading: false,
          totalHits: images.totalHits,
        }));
      } catch (error) {
        this.setState({ error: true, isLoading: false });
        console.log(error);
      }
    }

    if (
      this.state.images.length !== 0 &&
      !this.state.visibleBtn &&
      this.state.images.length < this.state.totalHits
    ) {
      this.setState({ visibleBtn: true });
    } else if (
      this.state.images.length >= this.state.totalHits &&
      this.state.visibleBtn
    ) {
      this.setState({ visibleBtn: false });
    }
  }

  onClickLoadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <ImageGalleryList>
          {/* {this.state.images.length === 0 && <div>Images nod found</div>} */}
          {this.state.images.map(image => (
            <ImageGalleryItem
              image={image}
              webformatURL={image.webformatURL}
              key={image.id}
            />
          ))}
        </ImageGalleryList>
        {this.state.isLoading && <Loader />}
        {this.state.visibleBtn && <Button onClick={this.onClickLoadMoreBtn} />}
      </>
    );
  }
}
