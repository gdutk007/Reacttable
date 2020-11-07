import React from 'react'


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
            
            <div>
                <label>
                    <p>{item.name}: {item.price} </p>
                </label>
            </div>
        );
      })
    return(
        <div>
            <h1>{propcategory}</h1>
            <ul>
                {itemList}
            </ul>
        </div>
    );

}

export default Category;