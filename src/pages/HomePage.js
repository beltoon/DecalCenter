import React, {useEffect, useState} from "react";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar/SearchBar";
import logo from "../assets/box.png"
import {useHistory} from "react-router-dom";
import "./homePage.css";
// import {Cars} from "../test/Cars";
import ContentBlock from "../components/ContentBlock";
import axios from "axios";


function HomePage() {
    const [cars, setCars] = useState([])

    const history = useHistory();

    function handleClick() {
        history.push("/decal");
    }

useEffect(() => {
    async function fetchCars() {
        try {
            const response = await axios.get('http://localhost:8080/cars');
            // console.log(response.data)
            setCars(response.data)
        } catch(e) {
            console.error(e)
        }
    }

    fetchCars();
}, []);

    // const carData = cars.map((car) =>  {
    //     // console.log(car)
    //     return car;
    // })
    //
    // const carIds = cars.map((car) => {
    //     // console.log(car.id)
    //     return car.id;
    // })

    // console.log(carData)

    return (
        <div className="page-container">
            <SearchBar placeholder="Search for a Car..." data={cars} />
            {/*<SearchBar placeholder="Search For a Car..." data={carNames} link={carId}/>*/}
            {/*<SearchBar placeholder="Search For a Car..." data={cars.map((car) => {*/}
            {/*    return car.name*/}
            {/*})}*/}
            {/*           link={cars.map((car) => {*/}
            {/*           return car.id})}/>*/}
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