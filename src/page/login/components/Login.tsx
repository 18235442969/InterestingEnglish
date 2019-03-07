import React, { Component } from 'react';
import '../Index.scss';

interface IProps{
  closeLogin: (type: boolean) => void
}

interface IState{
}

export default class Login extends Component<IProps, IState> {

  public closeLogin() {
    this.props.closeLogin(false);
  }

  render() {
    return (
      <div className="loginIn">
        <div className="loginIn-title">
          Hi,请输入个人信息
        </div>
        <div>
          手机号
        </div>
        {/* <div onClick={this.closeLogin.bind(this)}>
          asd
        </div> */}
      </div>
    )
  }
}
