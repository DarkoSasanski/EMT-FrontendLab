import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const AddAuthor = (props)=>{
    const [formData, updateFormData] = useState({
        name:"",
        surname:"",
        countryId:1
    })
    const history = useHistory();
    const handleChange=(e)=>{
        updateFormData({
            ...formData,
            [e.target.name]:e.target.value.trim()
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault()
        const name = formData.name;
        const surname = formData.surname;
        const countryId = formData.countryId;
        props.onAddAuthor(name, surname, countryId)
        history.push("/authors")
    }
    return(
        <div className={"container"}>
            <h2>Add Author</h2>
            <div className={"row"}>
                <div className={"col-md-6"}>
                    <form onSubmit={formSubmit}>
                        <div className={"mb-3"}>
                            <label htmlFor={"name"} className={"form-label"}>Name</label>
                            <input type={"text"} className={"form-control"} name={"name"} id={"name"} onChange={handleChange}/>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor={"surname"} className={"form-label"}>Name</label>
                            <input type={"text"} className={"form-control"} name={"surname"} id={"surname"} onChange={handleChange}/>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor={"country"} className={"form-label"} >Country</label>
                            <select className={"form-select"} id={"country"} name={"countryId"} onChange={handleChange}>
                                {
                                    props.countries.map((c)=>{
                                        return(
                                            <option value={c.id}>{c.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className={"mb-3"}>
                            <button type="submit" className={"btn btn-primary"}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddAuthor