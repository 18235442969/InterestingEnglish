import React, { Component } from 'react';
import './Index.scss';
import { Button } from 'antd-mobile';

interface IHistory{
  goBack: Function
}

interface IProps{
  history: IHistory
}

interface IState{
  isStudyBtnLoading: boolean,
  isStudyBtnDisabled: boolean
}

export default class Index extends Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
      isStudyBtnLoading: false,
      isStudyBtnDisabled: false
    }
  }

  public goBack() {
    this.props.history.goBack();
  }

  public render() {
    return (
      <div className="study">
        <Button type="primary" size="large" className="study-btn" onClick={this.goBack.bind(this)} loading={this.state.isStudyBtnLoading} disabled={this.state.isStudyBtnDisabled}>开始学习</Button>
      </div>
    )
  }
}
