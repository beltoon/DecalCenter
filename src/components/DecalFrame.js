import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./ContentFrame.css"



function DecalFrame() {
    const [content, setContent] = useState([]);
    // const [endpoint, setEndpoint] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);




    //ENDPOINT MOET NOG AANGEMAAKT WORDEN

    useEffect(() => {
            async function fetchData() {
                toggleLoading(true);
                setError(false);
                try {
                    const response = await axios.get('http://localhost:8080/decals');
                    setContent(response.data);
                    // console.log(response.data);
                } catch (e) {
                    console.error(e);
                    setError(true);
                }

                toggleLoading(false)
            }
            fetchData();
        }, []

    )
    // console.log(contentList)
    // console.log(content)

    return (
        <>
            <div className="contentBox"> </div>
        <h2>Check out the latest decals!!</h2>

            {content.slice(0, 9).map((item) => {
                return <section className="content" key={item.id}>
                    {/*<img alt="test"></img>*/}

                    <h4>

                        {item.name}
                        </h4>
                    <h4>{item.car.name}</h4>
                    <h5>
                        {item.company}
                        <p>Located: {item.decalPosition}</p>
                    </h5>
                </section>

            })}

            {/*<section className="content">Block 2</section>*/}
            {/*<section className="content">Block 3</section>*/}

            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong collecting the data...</p>}
        </>


    );
}
export default DecalFrame;