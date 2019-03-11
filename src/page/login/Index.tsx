import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css';
import './Index.scss';
import { Button } from 'antd-mobile';
import Login from './components/Login';
import { translate } from '../../api/user';

interface IHistory{
  push: Function
}

interface IProps{
  history: IHistory
}

interface IState{
  isLogin: boolean,
  isLoginShow: boolean,
  controls: boolean,
  autoplay: boolean,
  mp3Play: boolean
}

export default class Index extends Component<IProps, IState> {
  public constructor(props: IProps){
    super(props);
  }
  
  public audioRef: any;

  public state = {
    isLogin: false,
    isLoginShow: false,
    controls: true,
    autoplay: true,
    mp3Play: false
  }

  public async login() {
    // translate({
    //   w: 'hello',
    //   type: 'json'
    // }).then(res => {
    //   alert(res);

    // });
    // this.setState({
    //   isLoginShow: true
    // });
   this.audioRef.play()
  }

  public closeLogin(type: boolean) {
    console.log(type);
    this.setState({
      isLoginShow: type
    });
  }

  public render() {
    const { isLogin, isLoginShow, controls, autoplay, mp3Play } = this.state;
    return (
      <div className="login">
        <CSSTransition
          in={isLoginShow}
          // 需要加一个key属性，让react认识每个组件，并进行正确的加载。
          // 这里我改了官方demo的代码， 原来是设置成location.key， 这样的话每次点击同一个路由链接的时候都会渲染。
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
          // 动画时间设置和css中的需要一致。
          timeout={300}
        >
          <Login closeLogin={this.closeLogin.bind(this)} history={this.props.history}/>
        </CSSTransition>
        <div className="login-layer">
        </div>
        <div className="login-title">
          趣英语
          <audio src="http://media.shanbay.com/audio/uk/not.mp3" ref={ref => (this.audioRef = ref)}></audio>
        </div>
        <Button type="ghost" inline className="login-btn" onClick={this.login.bind(this)} loading={isLogin} disabled={isLogin}>
          手机号一键登录/注册
        </Button>
      </div>
    )
  }
}
