import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./ContentFrame.css"



function EventFrame() {
    const [eventContent, setEventContent] = useState([]);
    // const [endpoint, setEndpoint] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);




    //ENDPOINT MOET NOG AANGEMAAKT WORDEN

    useEffect(() => {
            async function fetchData() {
                toggleLoading(true);
                setError(false);
                try {
                    const response = await axios.get('http://localhost:8080/events');
                    setEventContent(response.data);
                    console.log(response.data);
                } catch (e) {
                    console.error(e);
                    setError(true);
                }

                toggleLoading(false)
            }
            fetchData();
        }, []

    )


    return (
        <>
            <div className="contentBox"> </div>
            <h2>Check out the upcoming events!!</h2>

            {eventContent.slice(0, 12).map((item) => {
                return <section className="content" key={item.id}>
                    {/*<img alt="test"></img>*/}

                    <h4>

                        {item.name}
                    </h4>
                    <h4>{item.eventDate}</h4>
                </section>

            })}

            {/*<section className="content">Block 2</section>*/}
            {/*<section className="content">Block 3</section>*/}

            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong collecting the data...</p>}
        </>


    );
}
export default EventFrame;