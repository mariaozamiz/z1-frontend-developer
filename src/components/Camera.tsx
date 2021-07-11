import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Bulb from '../images/bulb-icon.svg';

const Camera = () => {
    let videoObject: any;
    let canvasObject: any;
    let canvasContext: any;

    const [photoTaken, setPhotoTaken] = useState(false);
    const [accepted, setAccepted] = useState(false);

    useEffect(() => {
        let track: any;
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    facingMode: 'enviroment',
                    width: 200,
                },
                audio: false,
            })
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

    const shoot = () => {
        //define size
        const width = videoObject.videoWidth;
        const height = videoObject.videoHeight;
        canvasObject.width = width;
        canvasObject.height = height;
        //save image data
        canvasContext.drawImage(videoObject, 0, 0, width, height);
        const imageData: any = canvasObject.toDataURL('image/jpeg');
        setPhotoTaken(true);
        fetch('https://front-exercise.z1.digital/evaluations', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                // 'Content-Type': 'image/jpeg',
            },
            body: imageData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.summary.outcome === 'Approved') {
                    setAccepted(true);
                }
            });
    };

    return (
        <div className="camera">
            <main className="main">
                <h2 className="title">Take picture</h2>
                <p className="text">
                    Fit your ID card inside the frame. The picture will be taken
                    automatically.
                </p>
                <div
                    className={
                        'camera-frame ' + (accepted ? 'accepted' : 'rejected')
                    }
                >
                    <video
                        className={photoTaken ? 'hidden' : ''}
                        ref={(videoRef) => (videoObject = videoRef)}
                        autoPlay
                    ></video>
                    <canvas
                        className={photoTaken ? '' : 'hidden'}
                        ref={(canvasRef) => {
                            canvasObject = canvasRef;
                            if (canvasObject)
                                canvasContext = canvasObject.getContext('2d');
                        }}
                    ></canvas>
                </div>
                <img className="icon" alt="" src={Bulb} />
                <p className="text">Room lighting is too low</p>
                <button className="btn btn-shot" onClick={shoot}>
                    shoot
                </button>
                <Link to="/">
                    <button className="btn btn-cancel">cancel</button>
                </Link>
            </main>
        </div>
    );
};

export default Camera;
