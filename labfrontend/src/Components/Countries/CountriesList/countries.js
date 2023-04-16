import React from "react";
import {Link} from "react-router-dom";

const countries = (props)=>{
    return(
        <div className={"container"}>
            <h2 className={"text-center"}>Countries</h2>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Continent</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.countries.map((c)=>{
                        return(
                            <tr>
                                <td>{c.name}</td>
                                <td>{c.continent}</td>
                                <td className={"d-flex justify-content-end"}>
                                    <Link to={`/countries/edit/${c.id}`} onClick={()=>props.onEditCountry(c.id)} className={"btn btn-success me-3"}>Edit</Link>
                                    <button className={"btn btn-danger"} onClick={()=>{props.onDeleteCountry(c.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <Link to={"/countries/add"} className={"w-100 btn btn-dark"}>Add new country</Link>
                </div>
            </div>
        </div>
    )
}

export default countries