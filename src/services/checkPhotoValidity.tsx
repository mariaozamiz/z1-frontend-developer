const checkPhotoValidity = (imageData: any) => {
    return fetch('https://front-exercise.z1.digital/evaluations', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            // 'Content-Type': 'image/jpeg',
        },
        body: imageData,
    }).then((response) => response.json());
};

export default checkPhotoValidity;
