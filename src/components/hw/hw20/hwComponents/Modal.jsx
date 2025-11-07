import { Component } from "react";
import { Overlay, ModalWindow, ModalImage } from "../Styles/Modal";
import { createPortal } from "react-dom";

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
  }

  handleEsc = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <ModalWindow>
          <ModalImage src={largeImageURL} alt="" />
        </ModalWindow>
      </Overlay>,
      document.body
    );
  }
}
