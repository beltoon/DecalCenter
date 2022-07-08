import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import DecalFrame from "../components/DecalFrame";
import PageHeader from "../components/PageHeader/PageHeader";
import SearchBar from "../components/SearchBar/SearchBar";


function CarPage() {

    const [carList, setCarList] = useState('');
    const [carData, setCarData] = useState('')
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    const params = useParams();
    const carId = params.id;

    // console.log(carId)

    useEffect(() => {
            async function fetchCarData() {
                toggleLoading(true);
                setError(false);
                try {
                    const response = await axios.get(`http://localhost:8080/cars/${carId}`);
                    setCarData(response.data);
                    console.log(response.data);
                } catch (e) {
                    console.error(e);
                    setError(true);
                }
                toggleLoading(false)
            }
            fetchCarData();
        }, [carId]
    )


    useEffect(() => {
            async function fetchDecalData() {
                // toggleLoading(true);
                // setError(false);
                try {
                    // const response = await axios.get('http://localhost:8080/decals');
                    const response = await axios.get(`http://localhost:8080/cars/${carId}/decals`);
                    setCarList(response.data);
                } catch (e) {
                    console.error(e);
                    // setError(true);
                }

                // toggleLoading(false)
            }
            fetchDecalData();
        }, [carId]
    )

    // console.log(carList)

    return (
        <div className="page-container">

            <PageHeader page={carData.name} intro={`On this page you'll find some of the coolest ${carData.brand} decals. Check out the decals below or use the search to find the decal you're looking for.`}/>

            <SearchBar placeholder={`Search ${carData.brand} Decals`} data={carList} domain={`/cars/${carList.id}/decals`}/>

            <DecalFrame endpoint={`http://localhost:8080/cars/${carId}/decals`}/>

            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong collecting the data...</p>}
            {/*<p>ga naar je eigen <Link to="/user">profiel</Link></p>*/}
        </div>




    )
}

export default CarPage;