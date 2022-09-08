import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay class="overlay" onClick={this.handleBackdropClick}>
        <ModalWindow class="modal">
          <img
            src={this.props.image.largeImageURL}
            alt={this.props.image.tags}
          />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
