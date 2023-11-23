import { motion } from "framer-motion";

const Frame = (props) => {
    const animationSettings = {
        openFrame: {
            height: "0%",
            transition: { duration: 0.4, ease: "easeOut" }
        },
        closeFrame: {
            height: "100%",
            transition: { duration: 0.4, ease: "easeOut" }
        },
        hidden: {
            opacity: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        },
        visible: {
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    }

    return (
        <>
        </>
    );
    /*
    return (
        <motion.div 
        variants={animationSettings}
        initial={props.start}
        animate={props.end}
        exit={props.start}
        className="w-screen h-screen absolute backdrop-blur-[100px]"
        ></motion.div>
    );
    */
};

export default Frame;