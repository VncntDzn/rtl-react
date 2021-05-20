import InputField from 'components/InputField'
import Title from 'components/Title'
import Lists from 'components/Lists'
import styles from 'theme/main.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.app} >
        <Title />
        <InputField />
        <Lists />
      </div>
    </div>
  );
}

export default App;
