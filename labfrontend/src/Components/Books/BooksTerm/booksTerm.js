import React from "react";
import {Link} from "react-router-dom";

const productsTerm = (props)=>{
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"d-flex justify-content-end"}>
                <Link to={`/books/edit/${props.term.id}`} className={"btn btn-success me-3"} onClick={()=>props.onEditBook(props.term.id)}>Edit</Link>
                <button className={"btn btn-danger me-3"} onClick={()=>props.onDeleteBook(props.term.id)}>Delete</button>
                <button className={"btn btn-warning"} onClick={()=>props.onMarkAsTaken(props.term.id)}>Mark As Taken</button>
            </td>
        </tr>
    )
}

export default productsTerm