import React, { Component } from 'react';
import './App.css';
import Header from './js/Header';
import Menu from './js/Menu';
import Games from './js/Games';
import Input from './js/Input';


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        currentPage:"データ一覧"
      };
      this.changePage = this.changePage.bind(this);
  }

    changePage(currentPage) {
        this.setState({currentPage: currentPage})
    }

  render() {
    const currentPage = this.state.currentPage;

    let Content = null;

    switch (currentPage) {
        case"データ一覧":
          Content = (() => <Games />);
          break;
        case "データ入力":
          Content = (() => <Input />);
          break;
    }
    return (
      <div className="App">
          <Header />
          <Menu
              changePage={this.changePage}
          />
          <Content />
      </div>
    );
  }
}

export default App;
