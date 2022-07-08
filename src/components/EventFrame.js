import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./ContentFrame.css"
import contentInRandomOrder from "../helpers/contentInRandomOrder";

function EventFrame({endpoint}) {
    const [eventList, setEventList] = useState([]);
    // const [endpoint, setEndpoint] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
            async function fetchEventFrameData() {
                toggleLoading(true);
                setError(false);
                try {
                    const response = await axios.get(endpoint);
                    setEventList(response.data);
                } catch (e) {
                    console.error(e);
                    setError(true);
                }
                toggleLoading(false)
            }

            fetchEventFrameData();
        }, [endpoint]
    )
    console.log(eventList)

    contentInRandomOrder({content: eventList})

    return (
        <>
            <div className="contentBox"></div>
            <h2>Check out the upcoming events!!</h2>

            {eventList.slice(0, 9).map((item) => {
                return <a href={`http://localhost:3000/events/${item.id}`}
                          id="decalLink" // ID AANPASSEN
                          title="Click to decalId page"
                          key={item.id}>
                    <section className="content" key={item.id}>

                    <h2>{item.name}</h2>
                    <h2>{item.eventDate}</h2>
                </section>
                </a>

            })}

            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong collecting the data...</p>}
        </>
    );
}

export default EventFrame;