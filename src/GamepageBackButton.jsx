import { Link } from "react-router-dom";

const GamepageBackButton = () => {
    return (
        <div id="nav-container" className="w-screen flex justify-center absolute z-10">
            <Link to={"/react-test/"} className="navbutton">
                Back
            </Link>
        </div>
    );
};

export default GamepageBackButton;