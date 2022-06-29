import React, {useEffect, useState} from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import SearchBar from "../components/SearchBar/SearchBar";
import {useHistory} from "react-router-dom";
import "./homePage.css";

import ContentBlock from "../components/ContentBlock";
import axios from "axios";


function HomePage() {
    const [cars, setCars] = useState([])

    const history = useHistory();

    // function handleClick() {
    //     history.push("/register");
    // }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await axios.get('http://localhost:8080/cars');
                // console.log(response.data)
                setCars(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchCars();
    }, []);

    return (
        <>
            <div className="page-container">


                <PageHeader page="Welcome on DecalCenter.com"
                            intro="Decal Center provides custom car decals to iRacing. Designed by the brands and available for everyone to use. Find the decal of your favorite brand, located perfectly for you car!"/>



                <SearchBar placeholder="Search for a Car..." data={cars} domain={"/cars/"}/>


                <p>-----
                    Hier komen de decals/events incl. zoekfunctie -----</p>

                <ContentBlock contentURL={"http://localhost:8080/decals"}/>


                {/*<p>ga naar je eigen <Link to="/user">profiel</Link></p>*/}
            </div>
        </>
    );
}

export default HomePage;