import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {

  let authLinks;
  if (localStorage.jwt === undefined) {
    console.log("logged out")
    authLinks = (
      <>
      <li>
      <Link to="signup">Sign up</Link>
          </li>
          <li>
          <Link to="login">Log in</Link>
          </li>
      </>
    )
  } else {
    console.log("logged in")
    authLinks = (
                <li>
                  <LogoutLink />
                </li>

    )
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <!-- Navbar brand (optional) --> */}
          <a className="navbar-brand" href="#">Brand</a>

          {/* <!-- Navbar toggler for mobile view --> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Navbar links and button --> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              {authLinks}
            </ul>
            {/* <!-- Button to trigger the offcanvas --> */}
            <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* // <!-- Offcanvas component --> */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Here you can put any content like navigation links or other information.</p>
          <ul className="list-unstyled">
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}