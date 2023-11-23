const TextBox = (props) => {
    return(
        <div className="m-10">
            <h1 className="text-white text-6xl">
                Hello
            </h1>
            <p className="text-white text-5xl">
                a
            </p>
        </div>
    );
};

const AboutRight = () => {
    return(
        <div className="rightcolumn">
            <TextBox />
            <TextBox />
        </div>
    );
};

export default AboutRight;