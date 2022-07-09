import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import ImageLoad from "../helpers/ImageLoad";

function DecalPage() {
    const [decal, setDecal] = useState('')
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    const params = useParams();
    const decalId = params.id;

    useEffect(() => {
            async function fetchData() {
                toggleLoading(true);
                setError(false);
                try {
                    const response = await axios.get(`http://localhost:8080/decals/${decalId}`);
                    setDecal(response.data);
                    console.log(response.data);
                } catch (e) {
                    console.error(e);
                    setError(true);
                }
                toggleLoading(false)
            }

            fetchData();
        }, [decalId]
    )

    const [show, setShow] = useState(false);

    function changeState() {
        setShow(!show);
    }

    return (

        <>

            <div className="page-container">



                <div className="contentblock">

                    {show ? (
                        <ImageLoad src={decal.fileName.url}
                                   carName={decal.car.name}
                                   alt="decal img"
                                   placeholder="this"/>
                    ) : (
                        <button onClick={changeState}><h5>Show Image!</h5></button>
                    )}

                    <div>
                        <h2>{decal.name} | {decal.series}</h2>
                        <h3>Brought to you by: {decal.company}</h3>
                        <h3>Position: {decal.decalPosition}</h3>
                    </div>
                </div>


            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong collecting the data...</p>}
        </>
    )
}

export default DecalPage;