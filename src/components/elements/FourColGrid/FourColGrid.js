import React from 'react'; 
import PropTypes from 'prop-types';
import './FourColGrid.css';

const FourColGrid = (props) => {

    const renderElements = () => {
        const gridElements = props.children.map( (element, i) => {
            return (
                <div key={i} className="rmdb-grid-element">
                    {element}
                </div>
            )
        })
        return gridElements; 
    } 

    return (
        <div className="rmdb-grid">
            {/* Ternary operator checks to see if a header exists and is not loading
                if so, an H1 with the header appears, if not it returns null */}
            {props.header && !props.loading ? <h1> {props.header} </h1> : null}
            <div className="rmdb-grid-content">
                {renderElements()}
            </div>
        </div>
    )
}

FourColGrid.propTypes = {
    header: PropTypes.string,
    loading: PropTypes.bool
}

export default FourColGrid; 