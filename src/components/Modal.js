import React from 'react';

const Modal = ({ children, close }) => {
  return (
    <div className="nav-container">
      <div
        className="modal-background"
        onClick={() => close()}
      ></div>

      <div className="modal">
        <button onClick={() => close()} style={{ right: 15, top: 15, position: 'absolute', fontSize: 25, border: 'none', fontWeight: 'bolder', color: 'dodgerblue', cursor: 'pointer' }}>X</button>
        {children}</div>
      <style>{`
        .modal-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.44);
        }

        .modal {
          position: absolute;
          left: 50%;
          top: 50%;
          width: calc(100vw - 10em);
          max-width: 32em;
          max-height: calc(100vh - 4em);
          overflow: auto;
          transform: translate(-50%, -50%);
          padding: 1em;
          border-radius: 0.2em;
          background: white;
          
        }
      `}</style>
    </div >
  );
}

export default Modal;