import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
      <div>
        <img src={image} alt="name" width="480" />
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};
