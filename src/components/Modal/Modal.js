const Modal = ({ children, close }) => {
  const backdropClose = (e) => {
    e.currentTarget === e.target && close();
  };
  return (
    <div
      className="modal fade show"
      style={{ display: 'block', backdropFilter: 'blur(5px)' }}
      onClick={backdropClose}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Modal</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
