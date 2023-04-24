import './App.css';
import {Component} from "react";
import LibraryService from "../../repository/libraryRepository";
import Header from "../Header/header";
import {Redirect, Route, BrowserRouter as Router} from "react-router-dom";
import BooksList from "../Books/BooksList/booksList"
import Authors from "../Authors/AuthorsList/authors";
import Countries from "../Countries/CountriesList/countries";
import Categories from "../Categories/categories";
import AddCountry from "../Countries/AddCountry/addCountry";
import EditCountry from "../Countries/EditCountry/editCountry";
import AddAuthor from "../Authors/AddAuthor/addAuthor";
import EditAuthor from "../Authors/EditAuthor/editAuthor";
import AddBook from "../Books/AddBook/addBook";
import EditBook from "../Books/EditBook/editBook";
class App extends Component
{
  constructor(props) {
    super(props);
    this.state={
      books:[],
      authors:[],
      countries:[],
      categories:[],
      book:{},
      author:{},
      country:{}
    }
  }
  render()
  {

    return(
        <Router>
          <Header/>
          <main>
            <div className={"container mt-3"}>
              <Route path={"/books"} exact render={()=>
                <BooksList books={this.state.books} onDeleteBook={this.deleteBook} onEditBook={this.getBook} onMarkAsTaken={this.markAsTakenBook}/>
              }></Route>
              <Route path={"/books/add"} exact render={()=>
              <AddBook onAddBook={this.addBook} authors={this.state.authors} categories={this.state.categories}/>
              }></Route>
              <Route path={"/books/edit/:id"} exact render={()=>
              <EditBook onEditBook={this.editBook} book={this.state.book} authors={this.state.authors} categories={this.state.categories}/>
              }></Route>
              <Route path={"/authors"} exact render={()=>
                <Authors authors={this.state.authors} onEditAuthor={this.getAuthor} onDeleteAuthor={this.deleteAuthor}/>
              }></Route>
              <Route path={"/authors/add"} exact render={()=>
              <AddAuthor countries={this.state.countries} onAddAuthor={this.addAuthor}/>
              }></Route>
              <Route path={"/authors/edit/:id"} exact render={()=>
              <EditAuthor author={this.state.author} countries={this.state.countries} onEditAuthor={this.editAuthor}/>
              }></Route>
              <Route path={"/countries"} exact render={()=>
              <Countries countries={this.state.countries} onEditCountry={this.getCountry} onDeleteCountry={this.deleteCountry}/>
              }></Route>
              <Route path={"/countries/add"} exact render={()=>
              <AddCountry onAddCountry={this.addCountry}/>
              }></Route>
              <Route path={"/countries/edit/:id"} exact render={()=>
              <EditCountry country={this.state.country} onEditCountry={this.editCountry}/>}></Route>
              <Route path={"/categories"} exact render={()=>
              <Categories categories={this.state.categories}/>
              }></Route>
              <Redirect to={"/books"}/>
            </div>
          </main>
        </Router>

    )
  }
  componentDidMount() {
    this.loadBooks();
    this.loadAuthors();
    this.loadCountries();
    this.loadCategories();
  }

  loadBooks=()=>{
    LibraryService.fetchBooks().then((data)=>{
      this.setState({
        books:data.data
      })
    })
  }

  loadAuthors=()=>{
    LibraryService.fetchAuthors().then((data)=>{
      this.setState({
        authors:data.data
      })
    })
  }

  loadCountries=()=>{
    LibraryService.fetchCountries().then((data)=>
    {
      this.setState({
        countries:data.data
      })
    })
  }
  loadCategories=()=>{
    LibraryService.fetchCategories().then((data)=>{
      this.setState({
        categories:data.data
      })
    })
  }
  addCountry=(name, continent)=>{
    LibraryService.addCountry(name, continent).then(()=>this.loadCountries())
  }
  editCountry=(id, name, continent)=>{
    LibraryService.editCountry(id, name, continent).then(()=>this.loadCountries())
  }
  deleteCountry=(id)=>{
    LibraryService.deleteCountry(id).then(()=>this.loadCountries())
  }
  getCountry=(id)=>{
    LibraryService.fetchCountry(id).then((data)=>
    {
      this.setState({country:data.data})
    })
  }

  addAuthor=(name, surname, countryId)=>{
    LibraryService.addAuthor(name, surname, countryId).then(()=>this.loadAuthors());
  }
  editAuthor=(id, name, surname, countryId)=>{
    LibraryService.editAuthor(id, name, surname, countryId).then(()=>this.loadAuthors());
  }
  deleteAuthor=(id)=>{
    LibraryService.deleteAuthor(id).then(()=>this.loadAuthors());
  }
  getAuthor=(id)=>{
    LibraryService.fetchAuthor(id).then((data)=>{
      this.setState({
        author:data.data
      })
    })
  }

  addBook=(name, category, authorId, availableCopies)=>{
    LibraryService.addBook(name, category, authorId, availableCopies).then(()=>this.loadBooks())
  }
  editBook=(id, name, category, authorId, availableCopies)=>{
    LibraryService.editBook(id, name, category, authorId, availableCopies).then(()=>this.loadBooks())
  }
  deleteBook=(id)=>{
    LibraryService.deleteBook(id).then(()=>this.loadBooks())
    window.location.reload();
  }
  getBook=(id)=>{
    LibraryService.fetchBook(id).then((data)=>{
      this.setState({
        book:data.data
      })
    })
  }

  markAsTakenBook=(id)=>{
    LibraryService.marksAsTaken(id).then(()=>this.loadBooks());
  }
}



export default App;
