import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.scss';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className={styles.App}>
      {/* <p>Almost there... This is a paragraph</p> */}
      <Layout>
        {/* <p className={styles.SimpleText}>test</p> */}
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;