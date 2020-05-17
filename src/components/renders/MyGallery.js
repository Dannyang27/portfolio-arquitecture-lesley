import React from "react";
import Gallery from 'react-grid-gallery';
import inax_bathroom from './images/inax_bathroom.jpg'
import building from './images/building.jpg'
import everyman_bathroom from './images/everyman_bathroom.jpg'
import frama_copenhagen from './images/frama_copenhagen.jpg'
import frama_copenhagen_bedroom from './images/frama_copenhagen_bedroom.jpg'
import interior_2 from './images/interior_2.jpg'
import lisbon_apartment from './images/lisbon_apartment.jpg'
import olafure_house from './images/olafure_house.jpg'
import plants from './images/plants.jpg'
import staircase_paris from './images/staircase_paris.jpg'
import building_thumbnail from './images/thumbnails/building_thumbnail.jpg'
import frama_thumbnail from './images/thumbnails/frama_copenhagen_thumbnail.jpg'
import interior_thumbnail from './images/thumbnails/interior_2_thumbnail.jpg'

const MyGallery = (props) => {

    const width = window.innerWidth / 13
    const height = width * 1.36

    const IMAGES =
        [
            {
                src: olafure_house,
                thumbnail: olafure_house,
                thumbnailWidth: width,
                thumbnailHeight: height,
            },
            {
                src: frama_copenhagen,
                thumbnail: frama_thumbnail,
                thumbnailWidth: width,
                thumbnailHeight: height
            },
            {
                src: inax_bathroom,
                thumbnail: inax_bathroom,
                thumbnailWidth: width,
                thumbnailHeight: height
            },
            {
                src: everyman_bathroom,
                thumbnail: everyman_bathroom,
                thumbnailWidth: width,
                thumbnailHeight: height
            },
            {
                src: staircase_paris,
                thumbnail: staircase_paris,
                thumbnailWidth: width,
                thumbnailHeight: height
            },
            {
                src: plants,
                thumbnail: plants,
                thumbnailWidth: width,
                thumbnailHeight: height
            },
            {
                src: lisbon_apartment,
                thumbnail: lisbon_apartment,
                thumbnailWidth: width,
                thumbnailHeight: height
            },
            {
                src: frama_copenhagen_bedroom,
                thumbnail: frama_copenhagen_bedroom,
                thumbnailWidth: width,
                thumbnailHeight: height
            },
            {
                src: building,
                thumbnail: building_thumbnail,
                thumbnailWidth: width,
                thumbnailHeight: height
            },
            {
                src: interior_2,
                thumbnail: interior_thumbnail,
                thumbnailWidth: width,
                thumbnailHeight: height
            }
        ]

    return (
        <div>
            <Gallery images={IMAGES} rowHeight={height} maxRows={2} margin={5}/>
        </div>
    )
}

export default MyGallery;