import React, {useEffect, useState} from 'react';
import './ImageLoad.css';

const ImageLoad = React.memo(({src, carName, placeholder, alt = ""}) => {
    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(placeholder);

    useEffect(() => {
        // start loading original image
        const imageToLoad = new Image();
        imageToLoad.src = src;
        imageToLoad.onload = () => {
            // When image is loaded replace the src and set loading to false
            setLoading(false);
            updateSrc(src);
        }
    }, [src])

    return (
        <>
            <h1>{carName}</h1>
            <p>Right click, save image as</p>
            <img
                className="decalImage"
                src={currentSrc}
                style={{
                    opacity: loading ? 0.5 : 1,
                    transition: "opacity .15s linear"
                }}
                alt={alt}
            />

        </>
    )
});

export default ImageLoad;