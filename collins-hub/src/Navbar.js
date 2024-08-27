import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Guide to App</h1>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/create">SERVICES</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

/*
=> Link: these are used in place of the anchor tag to link pages in React in connects our site directly to the react router which can easily recieve the data from our react componenets to make the site fast and responsive.
*/