import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 2,
    error: false,
    query: '',
  };

  onSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}
