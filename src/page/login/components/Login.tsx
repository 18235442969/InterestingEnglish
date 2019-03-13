import React, { Component } from 'react';
import { Flex, Button, InputItem, Toast } from 'antd-mobile';
import { isStrEmpty } from '../../../utils/valid';
import '../Index.scss';

import { IHistory } from '../../../model/types/Props';

interface IProps{
  closeLogin: (type: boolean) => void,
  history: IHistory
}

interface IState{
  phone: string,
  code: string,
  validBtnValue: string,
  lableNum: number,
  codeLength: number,
  phoneHasError: boolean,
  codeHasError: boolean,
  isValidSend: boolean,
}

export default class Login extends Component<IProps, IState> {
  public constructor(props: IProps){
    super(props);
  }

  public timmer: any;

  public state: IState = {
    phone: '',
    code: '',
    validBtnValue: '获取验证码',
    lableNum: 3,
    codeLength: 6,
    phoneHasError: false,
    codeHasError: false,
    isValidSend: false,
  }

  /**
   * 关闭Login页面
   */
  public closeLogin() {
    this.props.closeLogin(false);
  }

  public phoneChange = (value: string) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        phoneHasError: true,
      });
    } else {
      this.setState({
        phoneHasError: false,
      });
    }
    this.setState({
      phone: value
    });
  }

  public codeChange = (value: string) => {
    if (value.replace(/\s/g, '').length < 6) {
      this.setState({
        codeHasError: true,
      });
    } else {
      this.setState({
        codeHasError: false,
      });
    }
    this.setState({
      code: value
    });
  }

  /**
   * timeStart
   */
  public timeStart = () => {
    let time = 60;
    this.timmer = setInterval(() => {
      this.setState({
        validBtnValue: `${time}s`,
        isValidSend: true
      });
      time--;
      if (time == 0) {
        clearTimeout(this.timmer);
        this.setState({
          validBtnValue: `获取验证码`,
          isValidSend: false
        });
      }
    }, 1000);
  }

  /**
   * 获取验证码
   */
  public getValidCode = () => {
    this.timeStart();
  }

  /**
   * loginValid 验证登录信息
   */
  public loginValid() {
    let { phone, code, phoneHasError, codeHasError} = this.state;
    if (isStrEmpty(phone)) {
      this.setState({
        phoneHasError: true
      });
      return false;
    }
    if (isStrEmpty(code)) {
      this.setState({
        codeHasError: true
      });
      return false;
    }
    if (phoneHasError || codeHasError) {
      return false;
    }
    return true;
  }

  /**
   * 提交登录信息
   */
  public submitLogin = () => {
    if (!this.loginValid()) {
      // this.closeLogin();
      this.props.history.push("/home");
    }
  }

  render() {
    return (
      <div className="loginIn">
        <div className="loginIn-title">
          Hi, 请输入个人信息
        </div>
        <div className="loginIn-phone">
          <div>
            手机号
          </div>
          <div className="phone-num">
            <InputItem
              type="phone"
              placeholder="请输入手机号"
              onChange={this.phoneChange}
              error={this.state.phoneHasError}
              value={this.state.phone}
              className="phone-numInput"
              labelNumber={this.state.lableNum}
            >
              +86
            </InputItem>
          </div>
        </div>
        <div className="loginIn-validCode">
          <div>
            验证码
          </div>
          <div className="phone-code">
            <Flex className="validCode-flex">
              <Flex.Item className="phone-codeItem">
                <InputItem
                  type="number"
                  placeholder="请输入验证码"
                  onChange={this.codeChange}
                  error={this.state.codeHasError}
                  value={this.state.code}
                  className="phone-codeInput"
                  maxLength={this.state.codeLength}
                >
                </InputItem>
              </Flex.Item>
              <Flex.Item className="phone-btnItem">
                <div className="phone-validBtn">
                  <Button className="validBtn" onClick={this.getValidCode} disabled={this.state.isValidSend}>
                    {this.state.validBtnValue}
                  </Button>
                </div>
              </Flex.Item>
            </Flex>
          </div>
        </div>
        <Button className="loginIn-button" activeClassName="loginIn-validBtnActive" onClick={this.submitLogin}>
          登录
        </Button>
      </div>
    )
  }
}
