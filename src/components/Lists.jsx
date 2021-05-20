import { firestore } from 'firebase/firebaseConfig';
import { useState } from 'react';
import styles from 'theme/main.module.scss';
import useTodo from 'custom-hooks/useTodo';
import Dialog from './Dialog';

const Lists = (props) => {
  const [open, setOpen] = useState(false);
  const [documentID, setDocumentID] = useState(null);
  const { lists } = useTodo();
  const handleEdit = (e, docID) => {
    setOpen(!open);
    setDocumentID(docID);
  };

  const handleDelete = async (e, docID) => {
    try {
      await firestore.collection('todo').doc(docID).delete();
      return 'success';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.lists}>
      {lists?.map(({ data, docID }, index) => (
        <div key={index} className={styles.card}>
          <h3>{data.todo}</h3>
          <div>
            <button
              onClick={(e) => handleEdit(e, docID)}
              className={styles.card__button__edit}
            >
              EDIT
            </button>
            &nbsp;
            <button
              onClick={(e) => handleDelete(e, docID)}
              className={styles.card__button__delete}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}

      <Dialog
        documentID={documentID}
        open={open}
        onClose={() => setOpen(!open)}
      />
    </div>
  );
};

export default Lists;
