import React from 'react'

class Modal extends React.Component {

  componentDidMount() {
    $('#modal').on('shown.bs.modal', function() {
      $('#databaseYear').trigger('focus');
    })
  }

  render() {
    const {
      children,
      closeText,
      confirmText,
      handleSend,
      modalWidth,
      modalTitle,
      id
    } = this.props;

    return (<div className="modal fade" id="${id}" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className={`modal-dialog modal-dialog-centered ${modalWidth}`} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalTitle || ''}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>);
  }
}

export default Modal;
