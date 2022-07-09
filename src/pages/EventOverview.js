import React, {useEffect, useState} from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import axios from "axios";
import SearchBar from "../components/SearchBar/SearchBar";
import EventFrame from "../components/EventFrame";

function EventOverview() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await axios.get('http://localhost:8080/events');
                console.log(response.data)
                setEvents(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchEvents();
    }, []);


    return (
        <div className="page-container">
            <PageHeader page="Upcoming events"
                        intro="One of our missions is to create a platform where creators are able to transform their favorite livery for upcoming events. Creating the Event domain is the next big thing on our road map. Until then, we're using this part of the website to keep you up to date with the upcoming events. "/>

            <SearchBar placeholder="Search for an Event..." data={events} domain={"/events/"}/>

            <EventFrame endpoint={'http://localhost:8080/events'}/>

        </div>
    )
}

export default EventOverview;