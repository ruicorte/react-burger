import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.scss';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className={styles.App}>
      <p>Almost there... This is a paragraph</p>
      <Layout>
        <p>test</p>
      </Layout>
    </div>
  );
}

export default App;