import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

const Player = () => {
    return (
        <div className="player">
            <div className="time-control">
                <p>Start time</p>
                <input type="range" name="" id=""/>
                <p>End time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleDoubleLeft}/>
                <FontAwesomeIcon className='play' size='2x' icon={faPlay}/>
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleDoubleRight}/>
            </div>
        </div>
    )
}

export default Player;