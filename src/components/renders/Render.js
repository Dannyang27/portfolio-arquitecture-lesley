import React, {useEffect, useRef, useState} from 'react';
import MyGallery from "./MyGallery";
import './Render.css'

const Render = () => {

    const ref = useRef(null);
    const [width, setWidth] = useState(500)
    useEffect(() => {
        setWidth(ref.current ? ref.current.offsetWidth : 0)
    }, [ref.current]);

    return(

        <div ref={ref} className="information-block">
            <MyGallery width={width}/>
        </div>
    )
}

export default Render;