import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader";


function DecalPage() {

    const [decal, setDecal] = useState('');
    const [decalFileName, setDecalFileName] = useState('')
    const [image, setImage] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    const params = useParams();
    const decalId = params.id;


    useEffect(() => {
            async function fetchDecalPageData() {
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

            fetchDecalPageData();
        }, [decalId]
    )

    useEffect(() => {
            async function fetchImage() {
                toggleLoading(true);
                setError(false);
                try {
                    const response = await axios.get(`http://localhost:8080/download/${decalFileName}`);
                    setImage(response.data);
                    console.log(response.data);
                } catch (e) {
                    console.error(e);
                    setError(true);
                }
                toggleLoading(false)
            }

            fetchImage();
        }, [decalFileName]
    )

    setDecalFileName(decal.fileName)

    return (
        <>
            <div className="page-container">
                       <PageHeader
                           // page={decal.car.name}
                                   intro={decal.name}

                       />


                <div className="contentblock">
                    {/*<div>*/}
                    {/*    <h2>{decal.car.name} | {decal.name}</h2>*/}
                    {/*    <h2>{decal.series}</h2>*/}
                    {/*    <h3>Position: {decal.decalPosition}</h3>*/}
                    {/*    <h3>Brand: {decal.company}</h3>*/}
                    {/*    <h4>Car class: {decal.car.category}</h4>*/}
                    {/*</div>*/}


                    <img className="decal-image"
                         src={image}
                         alt="decal afbeelding"/>

                </div>

                {/*<img src={decal.fileName.url} alt=""/>*/}

                {/*<p>ga naar je eigen <Link to="/user">profiel</Link></p>*/}
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong collecting the data...</p>}
        </>


    )
}

export default DecalPage;