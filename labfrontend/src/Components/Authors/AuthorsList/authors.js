import React from "react";
import {Link} from "react-router-dom";

const authors = (props) =>
{
    return (
        <div className={"container"}>
            <h2 className={"text-center"}>Authors</h2>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Country</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.authors.map((a)=>{
                        return(
                            <tr>
                                <td>{a.name}</td>
                                <td>{a.surname}</td>
                                <td>{a.country.name}</td>
                                <td className={"d-flex justify-content-end"}>
                                    <Link to={`/authors/edit/${a.id}`} className={"btn btn-success me-3"} onClick={()=>props.onEditAuthor(a.id)}>Edit</Link>
                                    <button className={"btn btn-danger"} onClick={()=>props.onDeleteAuthor(a.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <Link className={"btn btn-dark w-100"} to={"/authors/add"}>Add new author</Link>
                </div>
            </div>
        </div>
    )
}

export default authors