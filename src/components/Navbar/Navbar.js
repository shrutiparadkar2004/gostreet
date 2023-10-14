import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(<>
       <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid  nav-color">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">

       <h1 className="heading-main">GoStreet</h1>
       
    </a>
  </div>
    
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

    </div>
  </div>
  </nav>

</div>
</>

    )
}