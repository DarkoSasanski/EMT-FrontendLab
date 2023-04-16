import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const AddCountry=(props)=>{
    const [formData, UpdateFormData]=useState(
        {
            name:"",
            continent:""
        }
    )
    const history = useHistory();

    const submitForm=(e)=>
    {
        e.preventDefault()
        const name=formData.name
        const continent = formData.continent
        props.onAddCountry(name, continent)
        history.push("/countries")
    }

    const handleChange=(e)=>{
        UpdateFormData({
            ...formData,
            [e.target.name]:e.target.value.trim()
        })
    }

    return(
        <div className={"container"}>
            <h2>Add Country</h2>
            <div className={"row"}>
                <div className={"col-md-6"}>
                    <form onSubmit={submitForm}>
                        <div className={"mb-3"}>
                            <label htmlFor={"name"} className={"form-label"}>Name</label>
                            <input type={"text"} className={"form-control"} name={"name"} id={"name"} onChange={handleChange}/>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor={"continent"} className={"form-label"}>Continent</label>
                            <input type={"text"} className={"form-control"} name={"continent"} id={"continent"} onChange={handleChange}/>
                        </div>
                        <div className={"mb-3"}>
                            <button type={"submit"} className={"btn btn-primary"}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCountry