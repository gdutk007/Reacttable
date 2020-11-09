import React from 'react';
import '../../App.css';


const Tabledata = (props) =>{

    let itemsList = props.items.map((element)=>{
        
        let price = element.price
        let name = element.name
        return(
            <tr>           
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        );
    })

    return(
        <React.Fragment>
        <tr><th>{props.category}</th></tr>
        <tr>
            {itemsList}
            {props.children}
        </tr>
        </React.Fragment>
    );
}

export default Tabledata