import React, { Component } from 'react';
import './App.css';
import { getUserInfo, getUser } from './api/user';
import { Button } from 'antd-mobile';

interface IApp{
}

interface IList{
  id: number,
  status: number,
  title: string
}

class App extends Component<IApp> {

  public state = {
    list: []
  }

  public getUser = async () => {
    let res = await getUserInfo({
      name: 'hzy'
    })
    let resUser = await getUser({
      name: 'hzy'
    })
    console.log(res.data.data.list);
    this.setState({
      list: res.data.data.list
    });
  }

  public componentDidMount() {
    this.getUser();
  }

  public render() {
    const { list } = this.state;
    // console.log(list)
    return (
      <div className="App">
        {
          list.map((e: IList) => (
            <div key={e.id}>{e.title}</div>
          ))
        }
        <Button type="primary">This is a button</Button>
      </div>
    );
  }
}

export default App;
