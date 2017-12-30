import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Color from '../Color/Color';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div id="wrapper">
          <Color />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
