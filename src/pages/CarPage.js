import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import DecalFrame from "../components/DecalFrame";


function CarPage() {

    const [cars, setCars] = useState('');
    // const [loading, toggleLoading] = useState(false);
    // const [error, setError] = useState(false);

    const params = useParams();
    const carId = params.id;

    console.log(carId)

    useEffect(() => {
            async function fetchData() {
                // toggleLoading(true);
                // setError(false);
                try {
                    // const response = await axios.get('http://localhost:8080/decals');
                    const response = await axios.get(`http://localhost:8080/cars/${carId}/decals`);
                    setCars(response.data);
                    console.log(response.data);
                } catch (e) {
                    console.error(e);
                    // setError(true);
                }

                // toggleLoading(false)
            }
            fetchData();
        }, []
    )

    console.log(cars)



    return (
        <div className="page-container">
            <header className="header-container">
                <h1>This is the {cars.name}</h1>
            </header>

            <div className="contentblock">
                <h2>{cars.name}</h2>
            </div>

            {cars.length !== 0 && (
                <div>
                    {cars.map((value, key) => {
                        return (
                            <h2 key={value.id}>
                                {value.name}
                                {value.car.id}</h2>
                        );
                    })}
                </div>)}

            <DecalFrame endpoint={`http://localhost:8080/cars/${carId}/decals`}/>



                    {/*<img alt="test"></img>*/}
{/*<section>*/}
{/*                    <h4>*/}

{/*                        {item.name}*/}
{/*                    </h4>*/}
{/*                    <h4>{item.car.name}</h4>*/}
{/*                    <h5>*/}
{/*                        {item.company}*/}
{/*                        <p>Located: {item.decalPosition}</p>*/}
{/*                    </h5>*/}
{/*                </section>*/}



            {/*<p>ga naar je eigen <Link to="/user">profiel</Link></p>*/}
        </div>




    )
}

export default CarPage;