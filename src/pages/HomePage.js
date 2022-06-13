import React from "react";
import PageHeader from "../components/PageHeader";
import logo from "../assets/box.png"
import {Link, useHistory} from "react-router-dom";


function HomePage() {

    const history = useHistory();

    function handleClick() {
        history.push("/events");
    }

return (
    <div className="page-container">
    <PageHeader icon={logo} title="DecalCenter" />
    <p>DIT IS DE HOMEPAGE</p>

        <button type="button" onClick={handleClick}>
            Ga naar een event!
        </button>

        <p>ga naar je eigen <Link to="/user">profiel</Link></p>
    </div>
);
}

export default HomePage;