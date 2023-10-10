import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar">
            <h2 className="nav-brand">RenTrip</h2>
            <Link className="nav-menu"  to="/">Home</Link>
            <Link className="nav-menu"  to="/About">About</Link>
            <Link className="nav-menu"  to="/Adminlogin">Adminlogin</Link>
            <Link className="nav-menu"  to="/Blocks">Blocks</Link>
            <Link className="nav-menu"  to="/Review">Review</Link>
            <Link className="nav-menu"  to="/Userlogin">Userlogin</Link>
            <Link className="nav-menu"  to="/Services">Services</Link>
            
        </div>
    )
}