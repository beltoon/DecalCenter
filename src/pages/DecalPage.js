import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";


function DecalPage() {

    const [decal, setDecal] = useState('');
    // const [loading, toggleLoading] = useState(false);
    // const [error, setError] = useState(false);

    const params = useParams();

    useEffect(() => {
            async function fetchData() {
                // toggleLoading(true);
                // setError(false);
                try {
                    // const response = await axios.get('http://localhost:8080/decals/1');
                    const response = await axios.get(`http://localhost:8080/decals/${params.id}`);
                    setDecal(response.data);
                    console.log(response.data);
                } catch (e) {
                    console.error(e);
                    // setError(true);
                }

                // toggleLoading(false)
            }

            fetchData();
        }, []
    )

    return (
        <>
            <div className="page-container">
                <header className="header-container">
                    <h1>Welcome on the Decal page</h1>
                </header>

                <div className="contentblock">
                    <h2>{decal.car.name} | {decal.name}</h2>
                    <h3>Position: {decal.decalPosition}</h3>
                    <h3>Brand: {decal.company}</h3>
                    <h4>Car class: {decal.car.category}</h4>

                    <img className="decal-image"
                         src={decal.fileName.url} alt="decal afbeelding"/>


                </div>

                {/*<img src={decal.fileName.url} alt=""/>*/}

                {/*<p>ga naar je eigen <Link to="/user">profiel</Link></p>*/}
            </div>
        </>


    )
}

export default DecalPage;