import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const EditCountry = (props)=>{
    const [formData, updateFormData] = useState({
        name:"",
        continent:""
    })
    const history = useHistory();
    const handleChange=(e)=>{
        updateFormData({
            ...formData,
            [e.target.name]:e.target.value.trim()
        })
    }
    const submitForm=(e)=>{
        e.preventDefault()
        const name = formData.name===""?props.country.name:formData.name
        const continent = formData.continent===""?props.country.continent:formData.continent
        props.onEditCountry(props.country.id, name, continent)
        history.push("/countries")
    }
    return(
        <div className={"container"}>
            <h2>Edit Country</h2>
            <div className={"row"}>
                <div className={"col-md-6"}>
                    <form onSubmit={submitForm}>
                        <div className={"mb-3"}>
                            <label htmlFor={"name"} className={"form-label"}>Name</label>
                            <input type={"text"} className={"form-control"} name={"name"} id={"name"} onChange={handleChange} placeholder={props.country.name}/>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor={"continent"} className={"form-label"}>Continent</label>
                            <input type={"text"} className={"form-control"} name={"continent"} id={"continent"} onChange={handleChange} placeholder={props.country.continent}/>
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

export default EditCountry