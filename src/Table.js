import React from 'react';
import Row from './Row.js';


const Table = ({data}) =>{
    return(
        <table>
            <tbody>
                {
                    data.map((item)=>(
                        <Row  key = {item.id} item = {item}/>
                    ))
                }
            </tbody>
        </table>
    )

}

export default Table;