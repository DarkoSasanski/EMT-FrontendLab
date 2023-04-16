import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const EditBook = (props)=>
{
    const [formData, updateFormData]=useState(
        {
            name:"",
            category:"",
            authorId:0,
            availableCopies:0
        }
    )
    const history = useHistory()
    const handleChange=(e)=>
    {
        updateFormData({
            ...formData,
            [e.target.name]:e.target.value.trim()
        })
    }
    const submitForm=(e)=>{
        e.preventDefault()
        const name = formData.name===""?props.book.name:formData.name;
        const category = formData.category===""?props.book.category:formData.category;
        const authorId = formData.authorId === 0?props.book.author.id:formData.authorId;
        const availableCopies = formData.availableCopies === 0 ? props.book.availableCopies:formData.availableCopies;
        props.onEditBook(props.book.id, name, category, authorId, availableCopies)
        history.push("/books")
    }

    return(
        <div className={"container"}>
            <h2>Edit Book</h2>
            <div className={"row"}>
                <div className={"col-md-6"}>
                    <form onSubmit={submitForm}>
                        <div className={"mb-3"}>
                            <label htmlFor={"name"} className={"form-label"}>Name</label>
                            <input type={"text"} className={"form-control"} name={"name"} id={"name"} onChange={handleChange} placeholder={props.book.name}/>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor={"category"} className={"form-label"}>Category</label>
                            <select name={"category"} id={"category"} onChange={handleChange} className={"form-select"}>
                                {
                                    props.categories.map((c)=>
                                    {
                                        if(props.book.category!==undefined && props.book.category===c)
                                        {
                                            return <option value={c} selected={props.book.category}>{c}</option>
                                        }
                                        return(
                                            <option value={c}>{c}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor={"author"} className={"form-label"}>Author</label>
                            <select name={"authorId"} id={"author"} className={"form-select"} onChange={handleChange}>
                                {
                                    props.authors.map((a)=>{
                                        if(props.book.author!==undefined && props.book.author.id===a.id)
                                        {
                                            return(
                                                <option value={a.id} selected={props.book.author.id}>{a.name} {a.surname}</option>
                                            )
                                        }
                                        return(
                                            <option value={a.id}>{a.name} {a.surname}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor={"availableCopies"} className={"form-label"}>Available Copies</label>
                            <input type={"number"} className={"form-control"} name={"availableCopies"} id={"availableCopies"} onChange={handleChange} placeholder={props.book.availableCopies}/>
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
export default EditBook