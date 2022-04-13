import React from 'react';

import imgAlbum from '../../Assets/images/album.jpg';
import Button from '../Utils/Icons/Button';

import '../../Assets/sass/player.scss';
import Progress from '../Utils/Progress';
import { Back, Devices, Favorite, Forward, Microphone, Play, Player, Queue, Random, Repeat, Volume } from '../Utils/Icons';


export default function Player() {
    return (
        <div className="player">
            <div className="album">
                <img src={imgAlbum} alt="" />
                <div>
                    <strong>Internet Killed the Video Star</strong>
                    <span>The Broad Band</span>
                </div>
                <Favorite />
            </div>

            <div className="controls">
                <div>
                    <Random />
                    <Back />
                    <Play />
                    <Forward />
                    <Repeat />
                </div>
                <div>
                    <span>0:00</span>
                    <Progress />
                    <span>5:00</span>
                </div>
            </div>

            <div className="optionsControl">
                <Microphone />
                <Queue />
                <Devices />
                <Volume />
                <Progress />
            </div>
        </div>
    );
}