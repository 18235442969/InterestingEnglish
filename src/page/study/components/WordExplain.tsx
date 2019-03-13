import React, { Component } from 'react';
import { Button } from 'antd-mobile';

interface IProps{

}

interface IState{
  isUnknowDown: boolean
}

export default class WordExplain extends Component<IProps, IState> {

  public constructor(props: IProps){
    super(props);
  }

  public state: IState = {
    isUnknowDown: false
  }

  /**
   * wordUnknow
   * 单词不认识
   */
  public wordUnknow() {
    
  }

  render() {
    let { isUnknowDown } = this.state;
    return (
      <div className="word-explain">
        <div className="word-explain-word">
          <span>
            clap
          </span>
        </div>
        <div className="word-explain-soundmark">
          [klæp]
        </div>
        <ul className="word-explain-translate-list">
          <li className="word-explain-translate-item">
            <span className="word-explain-translate-item-soundmark">
              vt.& vi.
            </span>
            <span>
              拍手，鼓掌;轻轻拍打某人;急速放置;振翼，拍翅膀
            </span>
          </li>
          <li className="word-explain-translate-item">
            <span className="word-explain-translate-item-soundmark">
              n.
            </span>
            <span>
              鼓掌，拍手;拍手声;噼拍声;破裂声
            </span>
          </li>
          <li className="word-explain-translate-item">
            <span className="word-explain-translate-item-soundmark">
              vi.
            </span>
            <span>
              鼓掌，拍手;啪地关上
            </span>
          </li>
        </ul>
        <div className="word-explain-eg-line">
          例句
        </div>
        <ul className="word-explain-eg-list">
          <li className="word-explain-eg-item">
            <span className="word-explain-eg-item-num">
              1
            </span>
            <div className="word-explain-eg-item-translate">
              <p>
                Everyone clapped us when we went up to get our prize. 
              </p>
              <p className="word-explain-eg-item-translate-ch">
                我们上前领奖时，大家都为我们鼓掌.
              </p>
            </div>
          </li>
          <li className="word-explain-eg-item">
            <span className="word-explain-eg-item-num">
              2
            </span>
            <div className="word-explain-eg-item-translate">
              <p>
                She gives him a clap on the back.
              </p>
              <p className="word-explain-eg-item-translate-ch">
                她在他的背上拍了一下。
              </p>
            </div>
          </li>
          <li className="word-explain-eg-item">
            <span className="word-explain-eg-item-num">
              3
            </span>
            <div className="word-explain-eg-item-translate">
              <p>
                He was clapping his hands while on the bench.
              </p>
              <p className="word-explain-eg-item-translate-ch">
                海绵宝宝坐在长凳上鼓掌。
              </p>
            </div>
          </li>
        </ul>
        <div className="word-explain-eg-btn ac">
          <Button type="primary" inline activeClassName="word-explain-eg-unknow-btn-active" className="word-explain-eg-unknow-btn" onClick={this.wordUnknow} disabled={isUnknowDown}>
            不认识
          </Button>
        </div>
      </div>
    )
  }
}
