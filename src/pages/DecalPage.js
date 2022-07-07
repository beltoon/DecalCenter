import React, {useState, useEffect} from "react";
import axios from "axios";


function DecalPage() {

    const [decal, setDecal] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
            async function fetchData() {
                toggleLoading(true);
                setError(false);
                try {
                    // const response = await axios.get('http://localhost:8080/decals');
                    const response = await axios.get("http://localhost:8080/decals/1");
                    setDecal(response.data);
                    console.log(response.data);
                } catch (e) {
                    console.error(e);
                    setError(true);
                }

                toggleLoading(false)
            }
            fetchData();
        }, []

    )

    return (
        <div className="page-container">
            <header className="header-container">
                <h1>Welcome on the Decal page</h1>
            </header>

            <div className="contentblock">
               <h2>{decal.name}</h2>
            </div>
            <img src={decal.fileName.url} alt=""/>

            {/*<p>ga naar je eigen <Link to="/user">profiel</Link></p>*/}
        </div>




)
}

export default DecalPage;