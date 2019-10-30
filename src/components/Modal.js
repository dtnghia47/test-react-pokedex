import React, { Component } from 'react';
import Portal from './Portal'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleModal(e) {
    if (e.target.className === 'modal') {
      this.setState({ open: false })
    }
  }

  render() {
    const { open, content } = this.state
    return (
      <>
        {
          open ?
            <Portal selector="body">
              <div className="modal" onClick={(e) => this.toggleModal(e)} >
                <div className="modal-dialog">
                  {content && content}
                </div>
              </div>
              <div className="modal-backdrop fade in"></div>
            </Portal>
            : null
        }
      </>
    );
  }
}

export default Modal