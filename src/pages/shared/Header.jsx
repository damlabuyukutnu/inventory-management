export default function Header() {
    return (
        <>
            <nav className="navbar">
                <div className="navrow">
                    <a href="#" className="navbar-brand">MyBag</a>
                        <div class="searchColumn">
                            <form class="example">
                                <input className="input-box" type="text" placeholder="Search.." name="search" />
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <ul className="links">
                            <a href="#">
                                <li>Home</li>
                            </a>
                            <a href="#">
                                <li>Envanter</li>
                            </a>
                            <a href="#" className="bar-profile">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                    </svg>
                                </li>
                            </a>
                            <a href="#">
                            </a>
                            <a href="#">
                            </a>
                        </ul>
                </div>
            </nav>




            {/* <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Envanter</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
          <a className="nav-link">Link</a>
        </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Ara" aria-label="Ara" />
                            <button className="btn btn-outline-dark" type="submit">Ara</button>
                        </form>
                    </div>
                </div> 
             </nav> */}
        </>
    )
}