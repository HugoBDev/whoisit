import React from "react";
import "../../styles/NavBar"

const NavBar = () => {
    return(
        <div className="nav-bar">
            <ul>
                <li>Best Movies</li>
                <input type="search" placeholder="Who Is It ?" />
                <li>History</li>
                <li>About Us</li>
            </ul>
        </div>
    );
}

export default NavBar