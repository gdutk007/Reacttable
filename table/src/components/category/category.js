import React from 'react'
import '../../App.css';

function pleasework(element, category){
    return element.category === category
}

const Category = (props) => {

    let propcategory = null

    propcategory = props.category;
    let items = null 
    items = props.items.filter( (element)=>{
        return pleasework(element,propcategory)
    } )
    console.log(items)
    let itemList = items.map((item) =>{ 
        return (
                <div >
                    <td className="tablecss" >{item.name} </td>
                    <td>{item.price} </td>
                </div>
        );
      })
    return(
        <div>
            <tr className="tablecss" >
                <h2>{propcategory}</h2>
                {itemList}
            </tr>
        </div>
    );

}

export default Category;