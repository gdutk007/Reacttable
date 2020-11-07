import react from 'react'
import Category from '../category/category'

const Table = (props) => {

    let categories = props.productList.map( (element)=>{
        return element.category
    } );

    categories = categories.filter((val,id,array) =>  {
        return array.indexOf(val) === id
    });
    
    let tableList = null
    tableList = categories.map( (category) =>{
        return (
            <Category
                key={category} 
                category={category}
                items={props.productList}
            />
        );  
    } ) 

    return( 
        <div>
            The table should go here...
            {tableList}
        </div>
    );
}


export default Table;