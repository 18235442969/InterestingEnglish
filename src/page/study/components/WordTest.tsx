import React, { Component } from 'react';
import { IHistory } from '../../../model/types/Props';

interface IProps{
  history: IHistory
}

export default class WordTest extends Component<IProps> {

  public constructor(props: IProps){
    super(props);
  }

  /**
   * chooseOption
   */
  public chooseOption = (value: string) => {
    console.log(value);
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="word-test ac">
        <div className="word-test-word">
          clap
        </div>
        <div className="word-test-soundmark">
          [klæp]
        </div>
        <ul className="word-text-list">
          <li className="word-text-item" onClick={this.chooseOption.bind(this, 'a')}>
            <div className="word-text-item-option al">
              A
            </div>
            <div className="word-text-item-translate">
              鼓掌
            </div>
          </li>
          <li className="word-text-item item-right">
            <div className="word-text-item-option al">
              B
            </div>
            <div className="word-text-item-translate">
              下雨
            </div>
          </li>
          <li className="word-text-item">
            <div className="word-text-item-option al">
              C
            </div>
            <div className="word-text-item-translate">
              观看
            </div>
          </li>
          <li className="word-text-item item-right">
            <div className="word-text-item-option al">
              D
            </div>
            <div className="word-text-item-translate">
              测量
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
