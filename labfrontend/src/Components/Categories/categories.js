import React from "react";

const categories = (props)=>
{
    return(
        <div className={"container"}>
            <h2 className={"text-center"}>Categories</h2>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.categories.map((c)=>{
                        return(
                            <tr>
                                <td>{c}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default categories;