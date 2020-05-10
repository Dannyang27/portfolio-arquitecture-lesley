import React from 'react';
import Gallery from "./Gallery";
import './Render.css'

const render = () => {
    const images = render_images(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    return(
        <div className="information-block">
            <h1>Renders: {images.length}</h1>
            <Gallery/>
        </div>
    )
}

const render_images = (r) => {
    return r.keys().map(r);
}

export default render;