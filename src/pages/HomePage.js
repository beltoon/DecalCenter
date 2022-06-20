import React from "react";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
import logo from "../assets/box.png"
import {useHistory} from "react-router-dom";
import "./homePage.css";
import {Cars} from "../test/Cars";
import ContentBlock from "../components/ContentBlock";


function HomePage() {

    const history = useHistory();

    function handleClick() {
        history.push("/decal");
    }

    const carList = [...new Set(Cars.map((Val) => Val.car_name))]

    console.log(carList)

    return (
        <div className="page-container">
            <SearchBar placeholder="Search For a Car..." data={carList}/>
            <PageHeader icon={logo} title="DecalCenter"/>
            <p>DIT IS DE HOMEPAGE</p>



            <button type="button" onClick={handleClick}>
                Upload een decal!
            </button>

            <p>-----
                Hier komen de decals/events incl. zoekfunctie -----</p>

            <ContentBlock/>


            {/*<p>ga naar je eigen <Link to="/user">profiel</Link></p>*/}
        </div>
    );
}
export default HomePage;