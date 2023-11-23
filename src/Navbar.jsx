import { NavLink } from "react-router-dom";

const Projects = () => {
    return (
        <NavLink 
        to={"/"} 
            className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : "navbutton"
            }
        >
            Projects
        </NavLink>
    );
};

const About = () => {
    return (
        <NavLink
        to={"/about"} 
            className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : "navbutton"
            }
        >
            About me
        </NavLink>
    );
};

const Navbar = () => {
    return (
        <div id="nav-container" className="w-screen flex justify-center absolute">
            <Projects />
            <About />
        </div>
    );
};

export default Navbar;