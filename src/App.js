import React, { Component } from 'react';
// import logo from './logo.svg';
import styles from './App.module.scss';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  /*   
  state = {
      show: true,
    }; 
  */

  // componentDidMount() {
  //   setTimeout(() => { this.setState({ show: false }) }, 5000);
  // }

  render() {
    return (
      <div className={styles.App}>
        <Layout>
          <BurgerBuilder />
          {/* {this.state.show ? <BurgerBuilder /> : null} */}
        </Layout>
      </div>
    );
  }
}

export default App;