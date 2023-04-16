import axios from "../custom-axios/axios"

const LibraryService= {
    fetchBooks:()=>{
        return axios.get("/books")
    },
    fetchBook:(id)=>{
        return axios.get(`/books/${id}`)
    },
    fetchAuthor:(id)=>{
        return axios.get(`/authors/${id}`)
    },
    fetchCountry:(id)=>{
        return axios.get(`/countries/${id}`)
    },
    fetchAuthors:()=>{
        return axios.get("/authors")
    },
    fetchCountries:()=>{
        return axios.get("/countries")
    },
    addBook:(name, category, authorId, availableCopies)=>{
        return axios.post("/books/add", {
            "name":name,
            "category":category,
            "authorId":authorId,
            "availableCopies":availableCopies
        })
    },
    addAuthor:(name, surname, countryId)=>{
        return axios.post("/authors/add", {
            "name":name,
            "surname":surname,
            "countryId":countryId
        })
    },
    addCountry:(name, continent)=>{
        return axios.post("/countries/add", {
            "name":name,
            "continent":continent
        })
    },
    editBook:(id, name, category, authorId, availableCopies)=>{
        return axios.put(`/books/edit/${id}`, {
            "name":name,
            "category":category,
            "authorId":authorId,
            "availableCopies":availableCopies
        })
    },
    editAuthor:(id, name, surname, countryId)=>{
        return axios.put(`/authors/edit/${id}`, {
            "name":name,
            "surname":surname,
            "countryId":countryId
        })
    },
    editCountry:(id, name, continent)=>{
        return axios.put(`/countries/edit/${id}`, {
            "name":name,
            "continent":continent
        })
    },
    deleteBook:(id)=>{
        return axios.delete(`/books/delete/${id}`)
    },
    deleteAuthor:(id)=>{
        return axios.delete(`/authors/delete/${id}`)
    },
    deleteCountry:(id)=>{
        return axios.delete(`/countries/delete/${id}`)
    },
    fetchCategories:()=>
    {
        return axios.get("/books/categories");
    },
    marksAsTaken:(id)=>
    {
      return axios.get(`/books/markAsTaken/${id}`)
    }

}

export default LibraryService