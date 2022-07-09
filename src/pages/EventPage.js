import React from "react";

import EventContent from "../components/EventContent"

import "./homePage.css";
import PageHeader from "../components/PageHeader/PageHeader";

function EventPage() {


    return(
        <div className="page-container">

            <PageHeader page="Events" intro="Unfortunately this area is still under construction."/>


            <EventContent endpoint={"http://localhost:8080/events/1001"}/>

        </div>
    )
}

export default EventPage;