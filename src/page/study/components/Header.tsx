import React, { Component } from 'react'
import '../Index.scss';
import { Flex } from 'antd-mobile';
import { IHistory } from '../../../model/types/Props';

interface IProps{
  history: IHistory,
  title: string
}

export default class Header extends Component<IProps> {

  /**
   * constructor
   */
  public constructor(props: IProps) {
    super(props);
  }
  
  /**
   * goBack
   * 返回首页
   */
  public goBack = () => {
    this.props.history.goBack();
  }

  render() {
    let { title } = this.props;
    return (
      <Flex className="study-header" justify="center" align="center">
        <Flex.Item className="header-left al">
          {
            this.props.history.location.pathname === '/study/test' ? null : <i className="icon iconfont iconfanhui" onClick={this.goBack}></i>
          }
        </Flex.Item>
        <Flex.Item className="header-center ac">
          {title}
        </Flex.Item>
        <Flex.Item className="header-right ar"></Flex.Item>
      </Flex>
    )
  }
}
