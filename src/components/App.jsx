import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';

export class App extends Component {
  state = {
    // images: [],
    // isLoading: false,
    // page: 1,
    // error: false,
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
        {/* {this.state.visibleBtn && <Button onClick={this.onClickLoadMoreBtn} />} */}
      </div>
    );
  }
}
