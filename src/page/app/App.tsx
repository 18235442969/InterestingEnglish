import React, { Component } from 'react';
import './App.scss';
import { getUserInfo, getUser } from '../../api/user';
import { Button } from 'antd-mobile';
import { IUserInfoParams, IUserParams } from '../../model/types/api/user';

interface IHistory{
  push: Function
}

interface IProps{
  history: IHistory
}

interface IList{
  id: number,
  status: number,
  title: string
}

interface IState{
  list: IList[],

}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      list: []
    }
  }

  public getUser = async () => {
    const userInfoParams: IUserInfoParams = {
      name: 'hzy'
    };
    const userParams: IUserInfoParams = {
      name: 'hzy'
    };
    let res = await getUserInfo(userInfoParams);
    let resUser = await getUser(userParams);
    this.setState({
      list: res.data.data.list
    });
  }

  public gotoPage() {
    this.props.history.push("/study");
  }

  public componentDidMount() {
    this.getUser();
  }

  public render() {
    const { list } = this.state;
    return (
      <div className="App">
        {
          list.map((e: IList) => (
            <div key={e.id}>{e.title}</div>
          ))
        }
        <Button type="primary" onClick={this.gotoPage.bind(this)}>This is a button</Button>
      </div>
    );
  }
}

export default App;
