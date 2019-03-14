import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import 'animate.css';
import './Index.scss';
import { IHistory } from '../../model/types/Props';

import Header from './components/Header';
import WordList from './components/WordList';
import WordTest from './components/WordTest';
import WordExplain from './components/WordExplain';

interface IProps{
  history: IHistory
}

interface IState{
}


export default class Index extends Component<IProps, IState> {

  public constructor(props: IProps){
    super(props);
  }

  public state: IState = {
    
  }


  render() {
    let title;
    let path = this.props.history.location.pathname;
    switch (path) {
      case '/study/list':
        title = '单词列表';
        break;
      case '/study/explain':
        title = '解释';
        break;
      case '/study/test':
        title = '测试';
        break;
      default:
        title = '单词列表';
        break;
    }
    return (
      <div>
        <Header {...this.props} title={title}/>
        <div className="study-container">
          <Router>
            <Route
              render={({ location }) => {
                return (
                  <CSSTransition
                    in={true}
                    // 需要加一个key属性，让react认识每个组件，并进行正确的加载。
                    // 这里我改了官方demo的代码， 原来是设置成location.key， 这样的话每次点击同一个路由链接的时候都会渲染。
                    key={location.pathname}
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
                    <Switch>
                      <Route exact path="/study/list" component={ WordList }/>
                      <Route exact path="/study/test" component={ WordTest }/>
                      <Route exact path="/study/explain" component={ WordExplain }/>
                    </Switch>
                  </CSSTransition>
                )
              }} 
            />
          </Router>
        </div>
      </div>
    )
  }
}
