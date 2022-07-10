import React, {useEffect, useRef, useState} from "react";
import "./SearchBar.css";

function SearchBar({placeholder, data, domain}) {
    const userRef = useRef();

    const [filteredData, setFilteredData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setQuery(searchWord);

        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const domainUrl = domain;


    return (

        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={query}
                    ref={userRef}
                    onChange={handleFilter}
                />
            </div>


            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.map((value, key) => {
                        return (
                            <a href={domainUrl + value.id} key={value.id} className="dataItem">
                                <p>{value.name}</p></a>

                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;