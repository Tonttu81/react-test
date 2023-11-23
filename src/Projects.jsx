import Navbar from "./Navbar"
import ImageTrack from "./ImageTrack";
import { Outlet } from "react-router-dom";

const Projects = () => {
    return (
        <>
            <div className="h-screen w-screen">
                <ImageTrack />
                <Outlet />
                <Navbar />
            </div>
        </>
    );
};

export default Projects;