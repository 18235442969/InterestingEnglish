import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import RouterMap from './routerMap'

export default class router extends Component {
  render() {
    return (
      <Router >
        <RouterMap />
      </Router>
    )
  }
}
