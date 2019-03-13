import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './Index.scss';

import { IHistory } from '../../model/types/Props';

interface IProps{
  history: IHistory,
}

interface IState{
  isStudyBtnLoading: boolean,
  isStudyBtnDisabled: boolean
}

export default class Index extends Component<IProps, IState> {
  public constructor(props: IProps){
    super(props);
  }

  public state: IState = {
    isStudyBtnLoading: false,
    isStudyBtnDisabled: false
  }

  public goBack() {
    this.props.history.goBack();
  }

  /**
   * goToPage
   * 点击前往学习页面
   */
  public goToPage = () => {
    this.props.history.push('/study/list');
  }

  public render() {
    return (
      <div className="study">
        <div className="study-startBtn">
          <Button className="study-btn" activeClassName="study-btnActive" onClick={this.goToPage} loading={this.state.isStudyBtnLoading} disabled={this.state.isStudyBtnDisabled}>开始学习</Button>
        </div>
        <div className="study-statistical ac">
          已学习 &nbsp;&nbsp;<span>0</span>&nbsp;&nbsp; 天, 共计&nbsp;&nbsp; <span>0</span> &nbsp;&nbsp;个单词
        </div>
      </div>
    )
  }
}
