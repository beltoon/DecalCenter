import React from "react";
import PageHeader from "../components/PageHeader";

function EventOverview() {
    return(
        <div className="page-container">
            <PageHeader title="event"/>

            <button>CREATE NEW EVENT</button>

            <p>HIER STAAN ALLE EVENTS</p>
        </div>
    )
}

export default EventOverview;