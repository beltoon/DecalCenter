import React, {useState} from "react";
import "./SearchBar.css";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder, data, domain}) {

    const [filteredData, setFilteredData] = useState([]);
    const [query, setQuery] = useState("");

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

    const clearInput = () => {
        setFilteredData([]);
        setQuery("");
    };

    const domainUrl = domain;


    return (

        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={query}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon/>
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput}/>
                    )}
                </div>
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