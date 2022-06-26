import React from "react";
import PageHeader from "../components/PageHeader";
import EventContent from "../components/EventContent"

function EventPage() {
    return(
        <div className="page-container">
            <PageHeader title="event"/>

            <h2>CREATE NEW EVENT</h2>

            <p>DIT IS EEN SINGLE EVENTPAGE</p>

            <EventContent endpoint={"http://localhost:8080/events/1001"}/>
        </div>
    )
}

export default EventPage;