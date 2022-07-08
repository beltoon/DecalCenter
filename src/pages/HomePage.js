import React, {useEffect, useState} from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import SearchBar from "../components/SearchBar/SearchBar";
import "./homePage.css";

import DecalFrame from "../components/DecalFrame";
import axios from "axios";


function HomePage() {
    const [cars, setCars] = useState([])

    // const history = useHistory();

    // function handleClick() {
    //     history.push("/register");
    // }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await axios.get('http://localhost:8080/cars');
                setCars(response.data)
                console.log(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchCars();
    }, []);



    return (
        <>
            <div className="page-container">


                <PageHeader page="Welcome to DecalCenter"
                            intro="Decal Center provides custom car decals to iRacing. Designed by the brands and available for everyone to use. Find the decal of your favorite brand, located perfectly for you car!"/>

                <SearchBar placeholder="Search for a Car..." data={cars} domain={"/cars/"}/>

                <div className="contentblock">
                    <DecalFrame endpoint={'http://localhost:8080/decals'}/>
                </div>

                {/*<p>ga naar je eigen <Link to="/user">profiel</Link></p>*/}
            </div>

        </>
    );
}

export default HomePage;