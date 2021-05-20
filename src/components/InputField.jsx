import { useState } from 'react';
import styles from 'theme/main.module.scss';

const InputField = (props) => {
  const [todo, setTodo] = useState(null);
  const submitTodo = (e) => {
    e.preventDefault();
    console.log(todo);
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
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={styles.inputFieldContainer__btn} type='submit'>
        Submit
      </button>
    </form>
  );
};

export default InputField;
