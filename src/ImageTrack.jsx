import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom";

const ScrollingImage = (props) => {
    const animationSettings = {
        hidden: {
            opacity: 0,
            transition: { duration: 1, ease: "easeOut" }
        },
        visible: {
            opacity: 1,
            transition: { duration: 1, ease: "easeOut", delay: 0.5}
        }
    }

    return (
        <div className="w-screen left-0 sticky flex-shrink-0 flex justify-center items-center snap-start">
            <motion.div 
            className="absolute select-none"
            variants={animationSettings}
            >
                <Link to={props.pageUrl} className="text-5xl text-white hover:opacity-50 ease-in-out duration-100">
                    {props.name}
                </Link>
            </motion.div>
            <img src={props.imageUrl} className="w-full h-full object-cover object-center" draggable="false"/>
        </div>
    );
};

const ImageTrack = () => {
    const location = useLocation();
    const track = useRef(null);

    useLayoutEffect(() => {
        const scrollAmount = window.sessionStorage.getItem('scrollAmount');
        track.current.scrollTo(scrollAmount, 0);
    }, []);

    if (location.pathname == "/") {
        const [mouseClick, setMouseClick] = useState({});
        const [mouseMovement, setMouseMovement] = useState({});
        const [mouseWheel, setMouseWheel] = useState({});

        useEffect(() => {
            const handleMouseDown = () => {
                setMouseClick(true);
            };
            const handleMouseUp = () => {
                setMouseClick(false);
            };
            const handleMouseMove = (event) => {
                setMouseMovement({ x:event.movementX, y:event.movementY });
            };
            const handleMouseWheel = (event) => {
                setMouseWheel(event.deltaY);
            };
            const handleScroll = () => {
                window.sessionStorage.setItem('scrollAmount', JSON.stringify(track.current.scrollLeft));
            };

            window.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('wheel', handleMouseWheel);
            track.current.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener(
                    'mousedown',
                    handleMouseDown
                );
                window.removeEventListener(
                    'mouseup', 
                    handleMouseUp
                );
                window.removeEventListener(
                    'mousemove',
                    handleMouseMove
                );
                window.removeEventListener(
                    'wheel',
                    handleMouseWheel
                );
                window.removeEventListener(
                    'scroll',
                    handleScroll
                );
            };
        }, []);
        if (mouseClick == true) {
            track.current.scrollBy(-mouseMovement.x, 0);
        };
        /*
        const styles = {
            transform: `translate(${track.current.position * 0.5}px, 0%)`
        };
        */
    }
    return (
        <div ref={track} className="flex h-screen w-screen fixed overflow-x-scroll scrollbar-hidden">
            <ScrollingImage name={"Image"} pageUrl={"/gamepage1"} imageUrl={"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}/>
            <ScrollingImage name={"Image"} pageUrl={""} imageUrl={"https://images.unsplash.com/photo-1679600228796-8602c3bc3e28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
            <ScrollingImage name={"Image"} pageUrl={""} imageUrl={"https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}/>
            <ScrollingImage name={"Image"} pageUrl={""} imageUrl={"https://images.unsplash.com/photo-1679750012183-97a546fd2862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80"}/>
            <ScrollingImage name={"Image"} pageUrl={""} imageUrl={"https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}/>
            <ScrollingImage name={"Image"} pageUrl={""} imageUrl={"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}/>
        </div>
    );
};

export default ImageTrack;