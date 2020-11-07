import React, {Component} from 'react'
import Table from './components/table/Table'
import logo from './logo.svg';
import './App.css';

class App extends Component {


  state = {
    table: [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ],
    display: true,
    PlaceHolder: '',
  }


  render(){

    return (
      <div className="App">
        Hello...
        <hr/>
        <input type="text" value={this.state.PlaceHolder} />
        <br/>
        <label>
          This is a textbox 
          <input type="checkbox"/>  
        </label>
        <br/>
        <br/>
        <Table productList={this.state.table}  />
      </div>
    );
  }

}

export default App;
