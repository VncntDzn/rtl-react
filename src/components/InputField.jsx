import { useState } from 'react';
import styles from 'theme/main.module.scss';
import { firestore } from 'firebase/firebaseConfig';
import firebase from 'firebase/firebaseConfig';

const InputField = (props) => {
  const [todo, setTodo] = useState(null);

  const submitTodo = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection('todo').add({
        todo,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      alert('success');
    } catch (error) {
      alert(error);
    }
    setTodo('');
  };
  return (
    <form
      className={styles.inputFieldContainer}
      onSubmit={(e) => submitTodo(e)}
    >
      <input
        className={styles.inputFieldContainer__input}
        placeholder='Please enter a todo.'
        required
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={styles.inputFieldContainer__btn} type='submit'>
        Submit
      </button>
    </form>
  );
};

export default InputField;
