import React, {useEffect, useState} from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import {useHistory} from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar/SearchBar";
import EventFrame from "../components/EventFrame";

function EventOverview() {


    const [events, setEvents] = useState([])

    const history = useHistory();

    function handleClick() {
        history.push("/create-event");
    }

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await axios.get('http://localhost:8080/events');
                // console.log(response.data)
                setEvents(response.data)
            } catch(e) {
                console.error(e)
            }
        }

        fetchEvents();
    }, []);

    // console.log(setEvents)

    return(
        <div className="page-container">
            <PageHeader title="event"/>

            <SearchBar placeholder="Search for an Event..." data={events} domain={"/events/"}/>

            <button type="button" onClick={handleClick}>
                CREATE NEW EVENT
            </button>


            <p>HIER STAAN ALLE EVENTS</p>

            <EventFrame/>

        </div>
    )
}

export default EventOverview;