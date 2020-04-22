import React, { Component } from 'react';
// import logo from './logo.svg';
import styles from './App.module.scss';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

import { Route, Switch } from 'react-router-dom';

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
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
          {/* <BurgerBuilder /> */}
          {/* <Checkout /> */}
          {/* {this.state.show ? <BurgerBuilder /> : null} */}
        </Layout>
      </div>
    );
  }
}

export default App;