import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import RouterMap from './routerMap'
import { CSSTransition } from 'react-transition-group';
import 'animate.css';

export default class router extends Component{
  render() {
    return (
      <Router>
         <Route
        render={({ location }) => {
          let index = location.pathname.slice(1).indexOf('/');
          let pathname = index > -1 ? location.pathname.slice(0, index+1) : location.pathname;
          return (
            <CSSTransition
              in={true}
              // 需要加一个key属性，让react认识每个组件，并进行正确的加载。
              // 这里我改了官方demo的代码， 原来是设置成location.key， 这样的话每次点击同一个路由链接的时候都会渲染。
              key={pathname}
              // classNames 就是设置给css动画的标示，记得'classNames'带's'的。
              classNames={{
                appear: 'animated',
                appearActive: 'fadeIn',
                enter: 'animated',
                enterActive: 'fadeIn',
                exit: 'animated',
                exitActive: 'fadeOut'
              }}
              unmountOnExit
              appear={true}
              timeout={300}
            >
              <RouterMap />
            </CSSTransition>
          )
        }} />
      </Router>
    )
  }
}
