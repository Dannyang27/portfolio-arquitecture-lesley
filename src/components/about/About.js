import React from 'react';
import portraitImage from '../../images/weil_lesley.png'

const about = () => {
    return (
        <div className="information-block">
            <img src={portraitImage} className="portrait-image-size"/>
            <p>
                Wei L is an registered Architect in Spain based in London working currently for the renowned
                office BIG as Junior Designer with previous experience working at MJZ and Sou Fujimoto Atellier.
            </p>
            <p>
                Recently he has decided to open his own practice to give voice to the yet unbuilt architecture,
                focusing on clean cut visuals.
            </p>
        </div>
    )
}

export default about;