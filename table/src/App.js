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


  HandleChange = (e) =>{
    this.setState({ PlaceHolder: e.target.value })
  }

  createTable = (category)=>{
    // create a table... call .map on this function
    // to return a complete table
  }

  render(){

    let categories = this.state.productList.map( (element)=>{
      return element.category
    } );

    categories = categories.filter((val,id,array) =>  {
      return array.indexOf(val) === id
    });
    

    console.log(table)

    return (
      <div className="App">
        Hello...
        <hr/>
        <input type="text" value={this.state.PlaceHolder} onChange={this.HandleChange} />
        <br/>
        <label>
          This is a textbox 
          <input type="checkbox"/>  
        </label>
        <br/>





        {/* <br/>
        <table className="tablecss">
          <Table productList={this.state.table}  />
        </table> */}
      </div>
    );
  }

}

export default App;
