import React from 'react'
import './css/swipButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';


const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayIcon fontSize='large' className='swip__Relay'></ReplayIcon>
            </IconButton>
            <IconButton>
                <CloseIcon fontSize='large'className="swip__Close"></CloseIcon>
            </IconButton>
            <IconButton>
                <StarRateIcon fontSize='large'className="swip__Star"></StarRateIcon>
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize='large'className="swip__Favo"></FavoriteIcon>
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSize='large'className="swip__Flash"></FlashOnIcon>
            </IconButton>
        </div>
    );
};

export default SwipeButtons;

