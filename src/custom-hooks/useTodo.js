import { useState, useEffect } from 'react';
import { firestore } from 'firebase/firebaseConfig';

const useTodo = () => {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        // unsubscribe to onSnapshot
        return firestore
            .collection('todo')
            .onSnapshot((snapshot) => {
                let todos = [];
                snapshot.forEach((doc) =>
                    todos.push({ docID: doc.id, data: doc.data() })
                );
                setLists(todos);
            });
    }, []);

    return { lists }
}

export default useTodo