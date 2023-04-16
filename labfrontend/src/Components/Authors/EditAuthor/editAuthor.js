import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const EditAuthor = (props)=>
{
    const [formData, updateFormData] = useState({
        name:"",
        surname:"",
        countryId:0
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
        const name = formData.name===""?props.author.name:formData.name;
        const surname = formData.surname===""?props.author.surname:formData.surname;
        const countryId = formData.countryId===0?props.author.country.id:formData.countryId;
        props.onEditAuthor(props.author.id, name, surname, countryId)
        history.push("/authors")
    }
    return(
        <div className={"container"}>
            <h2>Edit Author</h2>
            <div className={"row"}>
                <div className={"col-md-6"}>
                    <form onSubmit={formSubmit}>
                        <div className={"mb-3"}>
                            <label htmlFor={"name"} className={"form-label"}>Name</label>
                            <input type={"text"} className={"form-control"} name={"name"} id={"name"} onChange={handleChange} placeholder={props.author.name}/>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor={"surname"} className={"form-label"}>Name</label>
                            <input type={"text"} className={"form-control"} name={"surname"} id={"surname"} onChange={handleChange} placeholder={props.author.surname}/>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor={"country"} className={"form-label"}>Country</label>
                            <select className={"form-select"} id={"country"} name={"countryId"} onChange={handleChange}>
                                {
                                    props.countries.map((c)=>{
                                            if(props.author.country!==undefined && props.author.country.id===c.id)
                                            {
                                                return(
                                                    <option value={c.id} selected={props.author.country.id}>{c.name}</option>
                                                )
                                            }
                                            else
                                            return(
                                            <option value={c.id}>{c.name}</option>)

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
export default EditAuthor
