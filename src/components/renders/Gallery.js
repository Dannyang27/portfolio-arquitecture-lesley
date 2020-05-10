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


const gallery = () => {
    const IMAGES =
        [
            {
                src: olafure_house,
                thumbnail: olafure_house,
                thumbnailWidth: 110,
                thumbnailHeight: 150,
                caption: "OLAFURE HOUSE by Wei Lesley"
            },
            {
                src: frama_copenhagen,
                thumbnail: frama_copenhagen,
                thumbnailWidth: 110,
                thumbnailHeight: 150
            },
            {
                src: inax_bathroom,
                thumbnail: inax_bathroom,
                thumbnailWidth: 110,
                thumbnailHeight: 150
            },
            {
                src: everyman_bathroom,
                thumbnail: everyman_bathroom,
                thumbnailWidth: 110,
                thumbnailHeight: 150
            },
            {
                src: staircase_paris,
                thumbnail: staircase_paris,
                thumbnailWidth: 110,
                thumbnailHeight: 150
            },
            {
                src: plants,
                thumbnail: plants,
                thumbnailWidth: 110,
                thumbnailHeight: 150
            },
            {
                src: lisbon_apartment,
                thumbnail: lisbon_apartment,
                thumbnailWidth: 110,
                thumbnailHeight: 150
            },
            {
                src: frama_copenhagen_bedroom,
                thumbnail: frama_copenhagen_bedroom,
                thumbnailWidth: 110,
                thumbnailHeight: 150
            },
            {
                src: building,
                thumbnail: building,
                thumbnailWidth: 110,
                thumbnailHeight: 150
            },
            {
                src: interior_2,
                thumbnail: interior_2,
                thumbnailWidth: 110,
                thumbnailHeight: 150
            }
        ]

    return (
        <div>
            <Gallery images={IMAGES}/>
        </div>
    )
}

export default gallery;