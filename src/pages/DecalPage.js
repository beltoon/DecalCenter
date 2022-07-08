import React, {useEffect, useState} from "react";
import PageHeader from "../components/PageHeader/PageHeader";
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
            <h2>JA</h2>
            <div className="page-container">
                <PageHeader
                    // page={decal.car.name}
                    intro={decal.name}

                />


                <div className="contentblock">
                    <p>test</p>
                    <div>
                        {/*<h2>{decal.car.name}</h2>*/}
                        <h2>{decal.name}</h2>
                        <h2>{decal.series}</h2>
                        <h3>Position: {decal.decalPosition}</h3>
                        <h3>Brand: {decal.company}</h3>
                        {/*<h4>Car class: {decal.car.category}</h4>*/}
                    </div>

                    {/*<img src={decal.fileName.url} alt="decal"/>*/}

                    {show ? (
                        <ImageLoad src={decal.fileName.url} alt="decal img" placeholder="this"/>
                    ) : (
                        <button onClick={changeState}><h5>Show Image </h5></button>
                    )}

                </div>


            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong collecting the data...</p>}
            <p>test</p>
        </>


    )
}

export default DecalPage;