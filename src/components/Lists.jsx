import { useState, useEffect } from 'react';
import { firestore } from 'firebase/firebaseConfig';
import PropTypes from 'prop-types';
import styles from 'theme/main.module.scss';

const Lists = (props) => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    // unsubscribe to onSnapshot
    return firestore
      .collection('todo')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        let todos = [];
        snapshot.forEach((doc) =>
          todos.push({ docID: doc.id, data: doc.data() })
        );
        setLists(todos);
      });
  }, [lists]);

  return (
    <div className={styles.lists}>
      {lists?.map(({ data }, index) => (
        <div key={index} className={styles.card}>
          <h3>{data.todo}</h3>
          <div>
            <button className={styles.card__button__edit}>EDIT</button>
            &nbsp;
            <button className={styles.card__button__delete}>DELETE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

Lists.propTypes = {};

export default Lists;
