import React, {Component} from "react";
import BooksTerm from "../BooksTerm/booksTerm";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";

class BooksList extends Component
{
    constructor(props) {
        super(props);
        this.state={
            page:0,
            size:5
        }
    }

    getBooks=(offset, nextPageOffset)=>
    {
       return (this.props.books.map((d, index)=>
       {
           return(<BooksTerm term={d} onDeleteBook={this.props.onDeleteBook} onEditBook={this.props.onEditBook} onMarkAsTaken={this.props.onMarkAsTaken}></BooksTerm>)
       }).filter((d, index)=>{
            return (index>=offset && index<nextPageOffset)
       }))
    }

    handlePageClick(e)
    {
        this.setState({
            page:e.selected
        })
    }

    render()
    {
        const offset = this.state.page * this.state.size
        const nextPageOffset = this.state.size + this.state.page*this.state.size
        const pages = Math.ceil(this.props.books.length / this.state.size)
        const books = this.getBooks(offset, nextPageOffset)

        return(
            <div className={"container"}>
                <h2 className={"text-center"}>Books</h2>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>AvailableCopies</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        books
                    }
                    </tbody>
                </table>

                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <ReactPaginate previousLabel={"back"}
                                       nextLabel={"next"}
                                       breakLabel={<a href="/#">...</a>}
                                       breakClassName={"break-me"}
                                       pageClassName={"ml-1"}
                                       pageCount={pages}
                                       marginPagesDisplayed={2}
                                       pageRangeDisplayed={5}
                                       onPageChange={this.handlePageClick}
                                       containerClassName={"pagination m-4 justify-content-center"}
                                       activeClassName={"active"}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <Link to={"/books/add"} className={"btn btn-dark w-100"}>Add new book</Link>
                    </div>
                </div>
            </div>


        )
    }
}


export default BooksList;