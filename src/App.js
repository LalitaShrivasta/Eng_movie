import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import PrimarySearchAppBar from './components/navbar.js';
import Sidenavbar from './components/sidenavbar.js';
// import {Search} from './components/search.js';


class App extends Component {
  render() {
    return (
      <div className="App">
              <PrimarySearchAppBar/>
              <Sidenavbar/>
              {/* <Search /> */}
      </div>
    );
  }
}

export default App;
