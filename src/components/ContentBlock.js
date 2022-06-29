import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./ContentBlock.css"
import Button from "./button/Button";
import Content from "./Content";
import {logDOM} from "@testing-library/react";

function ContentBlock () {
    const [contentList, setContentList] = useState([]);

    //ENDPOINT MOET NOG AANGEMAAKT WORDEN

    // const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [endpoint, setEndpoint] = useState("http://localhost:8080/cars");
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     async function fetchData() {
    //         toggleLoading(true);
    //         setError(false);
    //         try {
    //             const response = await axios.get(endpoint);
    //             setContentList(response.data);
    //             console.log(response.data);
    //         } catch (e) {
    //             console.error(e);
    //             setError(true);
    //         }
    //
    //         toggleLoading(false)
    //     }

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);
            setError(false);
            try {
                const response = await axios.get(endpoint);
                setContentList(response.data);
            } catch (e) {
                console.error(e);
                setError(true);
            }

            toggleLoading(false)
        }

        fetchData();
    }, [endpoint]);

    return (
        <div className="contentBox">
            {contentList &&
                <>
                    <section className="button-bar">
                        <Button
                            disabled={!contentList.previous}
                            clickHandler={() => setEndpoint(contentList.previous)}>Previous</Button>
                        <Button
                            disabled={!contentList.next}
                            clickHandler={() => setEndpoint(contentList.next)}>Next</Button>

                    </section>

                    {contentList.data && contentList.data.map((contentList) => {
                        return <Content endpoint={contentList}/>

                    })}

                </>
            }
            {loading && <p>Loading...</p>}
            {error && <p>Data couldn't be collected</p>}
        </div>
    );
}




export default ContentBlock;