import './MovingImage.css'
import petr from '.././images/petr.png';

function MovingImage() {
    return (
        //Allowing for different css if on mobile.
        <img src={petr} alt="petr" className="movingImage mobilemore" />
    )
    }

export default MovingImage