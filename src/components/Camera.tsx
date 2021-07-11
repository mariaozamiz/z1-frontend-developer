import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import checkPhotoValidity from '../services/checkPhotoValidity';
import Bulb from '../images/bulb-icon.svg';
import Ok from '../images/ok-icon.svg';

const Camera = () => {
    let videoObject: any;
    let canvasObject: any;
    let canvasContext: any;
    let timer: any;

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
                timer = setInterval(shoot, 2000);
            })
            .catch((error) => {
                window.alert('Sorry! Could not access to your camera');
            });
        return function cleanUp() {
            if (timer) clearInterval(timer);
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
        let imageData: any = canvasObject.toDataURL('image/jpeg');
        checkPhotoValidity(imageData).then((data) => {
            if (data.summary.outcome === 'Approved') {
                clearInterval(timer);
                setAccepted(true);
                setTimeout(() => {
                    /*volver a pantalla ppal*/
                }, 1000);
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
                        className={accepted ? 'hidden' : ''}
                        ref={(videoRef) => (videoObject = videoRef)}
                        autoPlay
                    ></video>
                    <canvas
                        className={accepted ? '' : 'hidden'}
                        ref={(canvasRef) => {
                            canvasObject = canvasRef;
                            if (canvasObject)
                                canvasContext = canvasObject.getContext('2d');
                        }}
                    ></canvas>
                </div>
                <div className="message">
                    <img className="icon" alt="" src={accepted ? Ok : Bulb} />
                    <p className="text">
                        {accepted
                            ? 'Picture taken!'
                            : 'Room lighting is too low'}
                    </p>
                </div>
                <Link to="/">
                    <button className="btn btn-cancel">cancel</button>
                </Link>
            </main>
        </div>
    );
};

export default Camera;
