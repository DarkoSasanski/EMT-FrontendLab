import {Link} from "react-router-dom";

const header = (props)=>
{
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <div className={"container"}>
                    <a className="navbar-brand" href="/books">Library Application</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/books"}>Books</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/authors"}>Authors</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className={"nav-link"} to={"/countries"}>Countries</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className={"nav-link"} to={"/categories"}>Categories</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default header