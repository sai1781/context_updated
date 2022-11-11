import { Link } from "react-router-dom";



const Nav = _ => {


    return (
        <div className="nav">
            <Link to="/">
                HomePage
            </Link>
            &ensp;&ensp;
            <Link to="/contact">
                contactpage
            </Link>
            &ensp;&ensp;

            <Link to="/service">
                ServicePage
            </Link>

        </div>
    )
}


export default Nav;