import React from 'react';
import './Track.css';
// import Track from '';

class Track extends React.Component {
    renderAction() {
<<<<<<< HEAD
        if (this.props.isRemoval) {
            return <button className="Track-action">-</button>;
        } else {
            return <button className="Track-action">+</button>;
=======
        if (isRemoval) {
            return document.getElementByClass('Track-action').innerHTML('-');
        } else {
            return document.getElementByClass('Track-action').innerHTML('+');
>>>>>>> 2d6778b49eb4f5200fed9d3671904e583120f504
        }
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3><!-- track name will go here --></h3>
                    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
                </div>
<<<<<<< HEAD
                    { this.renderAction() }
            </div>
        )
    }
}

export default Track;
=======
                    <button className="Track-action"><!-- + or - will go here --></button>
            </div>
        )
    }
}
>>>>>>> 2d6778b49eb4f5200fed9d3671904e583120f504
