import { useState } from 'react';
import { firestore } from 'firebase/firebaseConfig';
import Modal from 'react-modal';
import styles from 'theme/main.module.scss';

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
const Dialog = ({ open, onClose, documentID }) => {
  const [newTodo, setNewTodo] = useState(null);
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection('todo').doc(documentID).update({
        todo: newTodo,
        isEdited: true,
      });

      return 'success';
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal style={customStyles} isOpen={open} onRequestClose={onClose}>
      <form
        className={styles.inputFieldContainer}
        onSubmit={(e) => handleEdit(e)}
      >
        <input
          className={styles.inputFieldContainer__input}
          placeholder='Please enter a todo.'
          required
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className={styles.inputFieldContainer__btn} type='submit'>
            Submit
          </button>
          &nbsp;
          <button
            className={styles.inputFieldContainer__btn}
            style={{ background: 'red' }}
            onClick={onClose}
          >
            close
          </button>
        </div>
      </form>
    </Modal>
  );
};

Dialog.propTypes = {};

export default Dialog;
