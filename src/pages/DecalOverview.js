import React, {useEffect, useState} from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import {useHistory} from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar/SearchBar";
import DecalFrame from "../components/DecalFrame";
import contentInRandomOrder from "../helpers/contentInRandomOrder";

function EventOverview() {
    const [decalList, setDecalList] = useState([])

    const history = useHistory();

    function handleClick() {
        history.push("/upload-decal");
    }

    useEffect(() => {
        async function fetchDecals() {
            try {
                const response = await axios.get('http://localhost:8080/decals');
                console.log(response.data)
                setDecalList(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchDecals();
    }, []);

    contentInRandomOrder({content: decalList})

    return (
        <div className="page-container">
            <PageHeader page="Find all decals"
                        intro="On this page you can find the entire Decal Database. If you want to find a decal for a specific car, use the search engine of the home page."/>

            <SearchBar placeholder="Search for a Decal" data={decalList} domain={"/decals/"}/>

            <button type="button" onClick={handleClick}>
                Upload Decal
            </button>

            <DecalFrame endpoint={'http://localhost:8080/decals'}/>
        </div>
    )
}

export default EventOverview;