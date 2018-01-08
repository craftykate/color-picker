import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => (
  <React.Fragment>
    <Header />
    <div id="wrapper">
      {props.children}
    </div>
    <Footer />
  </React.Fragment>
);

export default Layout;
