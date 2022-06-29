import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./ContentBlock.css"


function ContentBlock({contentURL}) {
    const [contentList, setContentList] = useState([]);

    //ENDPOINT MOET NOG AANGEMAAKT WORDEN

    // const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [endpoint, setEndpoint] = useState(contentURL);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
            async function fetchData() {
                toggleLoading(true);
                setError(false);
                try {
                    const response = await axios.get(endpoint);
                    setContentList(response.data);
                    console.log(response.data);
                } catch (e) {
                    console.error(e);
                    setError(true);
                }

                toggleLoading(false)
            }
            fetchData();
        }, [endpoint]

    )
    // console.log(contentList)

    return (
        <div className="contentBox">

        </div>
    );
}
export default ContentBlock;