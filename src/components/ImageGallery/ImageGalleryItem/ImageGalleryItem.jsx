import { Li, Img } from './ImageGalleryItem.styled';
import React, { Component } from 'react';
import { Modal } from '../../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <Li>
        <Img
          src={this.props.image.webformatURL}
          alt={this.props.image.tags}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} image={this.props.image} />
        )}
      </Li>
    );
  }
}
