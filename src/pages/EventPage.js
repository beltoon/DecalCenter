import React from "react";

import EventContent from "../components/EventContent"

import "./homePage.css";

function EventPage() {


    return(
        <div className="page-container">

            <h2>CREATE NEW EVENT</h2>

            <p>DIT IS EEN SINGLE EVENTPAGE</p>

            <EventContent endpoint={"http://localhost:8080/events/1001"}/>

        </div>
    )
}

export default EventPage;