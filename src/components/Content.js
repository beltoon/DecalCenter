import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Content.css';
import placeholder from "../assets/placeholder300x200.png"

function Content( {endpoint} ) {
    const [content, setContent] = useState(null);

    useEffect(() => {
        console.log(endpoint);

        async function fetchData() {
            try {
                const response = await axios.get(endpoint);
                setContent(response.data);
                console.log("test CONTENT PAGE")
            } catch (e) {
                console.error(e)
            }
        }
        //
        // async function fetchData() {
        //     try {
        //         const {data} = await axios.get(endpoint);
        //         setContent(data);
        //     } catch (e) {
        //         console.error(e)
        //     }
        // }



        fetchData();
    }, [endpoint]);


    return (
        <section className="content-card">
            {content &&
                <>

                    <img
                        alt="afbeelding decal"
                        src={placeholder}/>
                    <h2>{content.brand}</h2>
                    <h3>{content.name}</h3>
                    <h4>{content.category}</h4>
                </>
            //h3 = car model

            }
        </section>
    );
}

export default Content;