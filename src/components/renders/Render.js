import React from 'react';

const render = () => {
    const images = render_images(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    return(
        <h1>Renders: {images.length}</h1>
    )
}

const render_images = (r) => {
    return r.keys().map(r);
}

export default render;