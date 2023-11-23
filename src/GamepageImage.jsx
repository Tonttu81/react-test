const GamepageImage = (props) => {
    return (
        <div className="w-screen top-0 sticky">
            <img src={props.imageUrl} className="w-full h-screen object-cover object-center" draggable="false"/>
        </div>
    );
};

export default GamepageImage;