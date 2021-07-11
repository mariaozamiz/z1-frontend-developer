import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Bulb from '../images/bulb-icon.svg';

const Camera = () => {
    let videoObject: any;

    useEffect(() => {
        let track: any;
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((localMediaStream) => {
                videoObject.srcObject = localMediaStream;
                track = localMediaStream.getTracks()[0];
            })
            .catch((error) => {
                window.alert('Sorry! Could not access to your camera');
            });

        return function stopCamera() {
            if (track) {
                track.stop();
            }
        };
    }, []);

    return (
        <div className="camera">
            <main className="main">
                <h2 className="title">Take picture</h2>
                <p className="text">
                    Fit your ID card inside the frame. The picture will be taken
                    automatically.
                </p>
                <div className="camera-frame">
                    <video
                        className="player"
                        ref={(videoRef) => (videoObject = videoRef)}
                        autoPlay
                    ></video>
                    <hr className="scan-line" />
                </div>
                <img className="icon" alt="" src={Bulb} />
                <p className="text">Room lighting is too low</p>
                <Link to="/">
                    <button className="btn btn-cancel">cancel</button>
                </Link>
            </main>
        </div>
    );
};

export default Camera;
