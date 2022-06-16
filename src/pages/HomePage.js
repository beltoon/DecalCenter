import React from "react";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
// import SearchBar2 from "../components/SearchBar2";
import logo from "../assets/box.png"
import {useHistory} from "react-router-dom";
import "./homePage.css";
import {Cars} from "../test/Cars";


function HomePage() {

    const history = useHistory();

    function handleClick() {
        history.push("/events");
    }

    const carList = [...new Set(Cars.map((Val) => Val.car_name))]

    console.log(carList)

    return (
        <div className="page-container">
            <PageHeader icon={logo} title="DecalCenter"/>
            <p>DIT IS DE HOMEPAGE</p>

            <button type="button" onClick={handleClick}>
                Ga naar een event!
            </button>

            <p>-----
                Hier komen de decals/events incl. zoekfunctie -----</p>

            <SearchBar placeholder="Search For a Car..." data={carList}/>

            {/*<p>ga naar je eigen <Link to="/user">profiel</Link></p>*/}
        </div>
    );
}
export default HomePage;