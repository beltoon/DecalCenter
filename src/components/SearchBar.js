import {Cars} from "../test/Cars";
import React, {useState} from "react";
import "./SearchBar.css";


function SearchBar() {

    const [query, setQuery] = useState("");

    return (

        <div>

            <input

                placeholder="search..."
                className="search"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <ul className="searchInputs">
                {Cars.filter((asd) =>
                    asd.car_name.toLowerCase().includes(query)
                ).map((cars) => (
                    <li key={cars.ID}
                        className="ListItem"
                    >
                        <div className="dataResult"></div>
                        {/*<a className="dataItem" href=""><p>{cars.car_name}</p></a>*/}
                        <p>{cars.car_name}</p>


                    </li>
                ))}
            </ul>

        </div>
    )
}

export default SearchBar;