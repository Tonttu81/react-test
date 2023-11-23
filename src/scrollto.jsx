/*
const [width, setWidth] = useState({});
const trackPosition = useRef({position: 0});

useLayoutEffect(() => {
    setWidth(track.current.scrollWidth);
}, []);

useEffect(() => {
    const handleResize = () => {
        setWidth(track.current.scrollWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener(
            'resize',
            handleResize
        );
    };
}, []);

trackPosition.current.position += -mouseMovement.x * 0.5;
trackPosition.current.position = Math.min(Math.max(trackPosition.current.position, 0), width);
*/

/*
parent
snap-mandatory snap-x
child
snap-start 
*/
