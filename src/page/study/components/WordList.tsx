import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import '../Index.scss';
import { IHistory } from '../../../model/types/Props';

interface IProps{
  history: IHistory
}

export default class WordList extends Component<IProps> {

  public constructor(props: IProps){
    super(props);
  }

  public state = {
    isKnowDown: false,
    isUnknowDown: false
  }

  /**
   * wordKnow
   * 认识单词
   */
  public wordKnow = () => {
    this.props.history.push('/study/test');
  }

  /**
   * wordUnknow
   * 不认识单词
   */
  public wordUnknow = () => {
    this.props.history.push('/study/explain');
  }

  render() {
    let { isKnowDown, isUnknowDown } = this.state;
    return (
      <div className="word-list ac">
        <div className="word-list-word">
          clap
        </div>
        <div className="word-list-know-btn">
          <Button type="primary" inline className="know-btn" onClick={this.wordKnow} disabled={isKnowDown}>
            认识
          </Button>
        </div>
        <div className="word-list-unknow-btn">
          <Button type="ghost" inline activeClassName="unknow-btn-active" className="unknow-btn" onClick={this.wordUnknow} disabled={isUnknowDown}>
            不认识
          </Button>
        </div>
      </div>
    )
  }
}
