import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./ContentFrame.css"
import contentInRandomOrder from "../helpers/contentInRandomOrder";

function DecalFrame({endpoint}) {
    const [decalList, setDecalList] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
            async function fetchDecalFrameData() {
                toggleLoading(true);
                setError(false);
                try {
                    const response = await axios.get(endpoint);
                    setDecalList(response.data);
                } catch (e) {
                    console.error(e);
                    setError(true);
                }
                toggleLoading(false)
            }

            fetchDecalFrameData();
        }, [endpoint]
    )

    contentInRandomOrder({content: decalList})

    return (
        <>
            <div className="contentBox">

                {decalList.slice(0, 9).map((item) => {
                    return <a href={`http://localhost:3000/decals/${item.id}`}
                              id="decalLink"
                              title="Click to decalId page"
                              key={item.id}>
                        <section className="content">
                            {/*{console.log(item.id)}*/}
                            <h4>{item.name}</h4>
                            {/*<h4>{item.car.name}</h4>*/}
                            <h5>
                                <p>Located: {item.decalPosition}</p>
                            </h5>
                        </section>
                    </a>

                })}

                {loading && <p>Loading...</p>}
                {error && <p>Something went wrong collecting the data...</p>}
            </div>
        </>


    );
}

export default DecalFrame;