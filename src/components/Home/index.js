import React, { useState } from 'react';
import classes from './index.module.css';
import image from './index.jpg';

const Home = () => {

    const [editProps, setEditProps] = useState({
        zoom: 1,
        rotation: 0
    });

    const onZoomChange = (event) => {
        console.log("Zoom", event.target.value);
        setEditProps({
            ...editProps,
            zoom: event.target.value
        })
    };

    const onRotation = (event) => {
        console.log("Rotation", event.target.value);
        setEditProps({
            ...editProps,
            rotation: event.target.value
        })
    }

    return(
        <>
            <div className={classes["container"]}>
                <div className={classes["range-container"]}>
                    <div className={classes["zoom"]}>
                        <label for="zoom">Zoom </label>
                        <input className={classes["range"]} name={"zoom"} type={"range"} min={"0.5"} max={"2"} step={"0.01"} value={editProps.zoom} onChange={onZoomChange} />
                    </div>
                    <div className={classes["rotation"]}>
                        <label for="rotation">Rotation </label>
                        <input className={classes["range"]} type={"range"} min={"0"} max={"360"} value={editProps.rotation} onChange={onRotation} />
                    </div>
                </div>
                <div className={classes["image-container"]}>
                    <img 
                        src={image} 
                        style={{
                            "--rotate":`${editProps.rotation}deg`,
                            "--zoom": `${editProps.zoom}`
                        }} 
                        className={classes["image"]} 
                    ></img>
                </div>
            </div>
        </>
    );
}

export default Home;