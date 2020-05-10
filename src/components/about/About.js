import React from 'react';
import portraitImage from '../../images/weil.png'
import './About.css'

const about = () => {
    return (
        <div className="information-block">
            <img src={portraitImage} className="portrait-image-size my-float-left"/>
            <p className="p-left-align">
                <h4 className="helvetica-light size-medium light-grey">
                    Wei L is an registered Architect in Spain based in London working currently for the renowned
                    office BIG as Junior Designer with previous experience working at MJZ and Sou Fujimoto Atellier.
                </h4>
                <h4 className="helvetica-light size-medium light-grey">
                    Recently he has decided to open his own practice to give voice to the yet unbuilt architecture,
                    focusing on clean cut visuals.
                </h4>
            </p>
        </div>
    )
}

export default about;