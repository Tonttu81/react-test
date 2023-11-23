import { motion } from "framer-motion";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";


const About = () => {
    return (
        <>
            <motion.div 
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-screen h-screen absolute backdrop-blur-[150px] grid grid-cols-20/80 grid-rows-20/80"
            >
                <AboutLeft />
                <AboutRight />
            </motion.div>
        </>
    );
};

export default About;