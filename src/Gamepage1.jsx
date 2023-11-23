import { motion } from "framer-motion"
import GamepageBackButton from "./GamepageBackButton";
import GamepageImage from "./GamepageImage";

const Gamepage1 = () => {
    const backButton = {
        up: {
            y: "-40px",
            transition: { duration: 0.2, ease: "easeInOut" }
        },
        down: {
            y: "0px",
            transition: { duration: 0.2, ease: "easeInOut" }
        }
    }

    const gameTexts = {
        up: {
            y: "0px",
            transition: { duration: 0.2, ease: "easeInOut" }
        },
        down: {
            y: "200px",
            transition: { duration: 0.2, ease: "easeInOut" }
        }
    }

    return(
        <>
            <div className="h-screen w-screen">
                <div className="h-screen w-screen flex flex-col fixed overflow-y-scroll scrollbar-hidden">
                    <GamepageImage imageUrl={"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} />
                    <GamepageImage imageUrl={"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} />
                    <GamepageImage imageUrl={"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} />
                </div>

                <motion.div
                className="absolute bottom-32 left-32 w-3/4"
                variants={gameTexts}
                initial="down"
                animate="up"
                exit="down"
                >
                    <p className="text-white text-4xl">
                        This is a game
                    </p>
                </motion.div>

                <motion.div
                variants={backButton}
                initial="up"
                animate="down"
                exit="up">
                    <GamepageBackButton />
                </motion.div>
            </div>
        </>
    );
};

export default Gamepage1;