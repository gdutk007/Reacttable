import React, {Component} from 'react'
import Table from './components/table/Table'
import Tabledata from './components/tabledata/Tabledata'
import logo from './logo.svg';
import './App.css';

class App extends Component {


  state = {
    productList: [
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

  HandleCheckBox = () => {
    this.setState({display: !this.state.display})
  }

  HandleChange = (e) =>{
    this.setState({ PlaceHolder: e.target.value })
  }

  createTable = (category)=>{
    // create a table... call .map on this function
    // to return a complete table
  }

  RemoveItems = (category)=>{
      return this.state.productList.filter((e)=>{
        return category === e.category
      })
  }

  render(){

    let categories = this.state.productList.map( (element)=>{
      return element.category
    } );

    categories = categories.filter((val,id,array) =>  {
      return array.indexOf(val) === id
    });
    
    let tableJSXList = categories.map((category)=>{
      let items = this.RemoveItems(category);
      return(
        <Tabledata
          key={category}
          category={category}
          items={items}
        />
      );
    })
    let table = null
    if(this.state.display){
      table = (
        <table id="table">
          <tbody>
            {tableJSXList}
          </tbody>
        </table>
      );
  }else{
    table = null
  }
    //console.log(table)

    return (
      <div className="App">
        Hello...
        <hr/>
        <input type="text" value={this.state.PlaceHolder} onChange={this.HandleChange} />
        <br/>
        <label> 
          <input type="checkbox" onChange={this.HandleCheckBox}/>  
          Check Box to hide data
        </label>
        {table}
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
