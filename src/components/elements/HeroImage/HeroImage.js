import React from 'react'; 
import './HeroImage.css'; 

const HeroImage = (props) => {
    return (
        <div className="rmdb-heroimage"
        //in-line style has double curly braces
        //one for entering javascript, one for the style object
            style={{
                background:
                `linear-gradient(to bottom, rgba(0, 0, 0, 0)
                39%, rgba(0, 0, 0, 0)
                41%, rgba(0, 0, 0, 0.65)
                100%),
                url('${props.image}'), #1c1c1c`
            }}
        >
            <div className="rmdb-heroimage-Content">
                <div className="rmdb-heroimage-text">
                    <h1>{props.title}</h1>  
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImage; 