import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(<>
       <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid  nav-color">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">

      {/* <img src="rentrip.avif" alt="Logo" width="30" /> */}
       <h1 className="heading-main">GoStreet</h1>
       {/* <img src="rentrip.avif" alt=" " width="30"  

      height="24" class="d-inline-block align-text-top"/> */}
      
    </a>
  </div>
    {/* <a class="navbar-brand" href="#">RenTrip</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-nav" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-nav" href="/About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-nav" href="/Services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-nav" href="/Review">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-nav" href="/Blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-nav" href="/Adminlogin">Adminlogin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-nav" href="/Userlogin">Userlogin</a>
        </li>

      </ul>

      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-secondary" type="submit">Search</button>
      </form> */}
    </div>
  </div>
  </nav>

</div>
{/* </div> */}
</>

    )
}