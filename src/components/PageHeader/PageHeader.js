import React from "react";
import "./PageHeader.css"

function PageHeader({ page, intro }) {

    return (
        <div className="header-container">

            <h1>{page}</h1>

            <h3>{intro}</h3>

        </div>
    )
}

export default PageHeader