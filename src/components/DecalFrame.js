import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./ContentFrame.css"
import contentInRandomOrder from "../helpers/contentInRandomOrder";


function DecalFrame({endpoint}) {
    const [decalList, setDecalList] = useState([]);
    // const [endpoint, setEndpoint] = useState([]);
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

    // const shuffleContent = (content) => {
    //     content.reverse().forEach((item, index) => {
    //         const j = Math.floor(Math.random() * (index + 1));
    //         [content[index], content[j]] = [content[j], content[index]];
    //     });
    //     return content;
    // };

    // function shuffleContent(content) {
    //     content.reverse().forEach((item, index) => {
    //         const j = Math.floor(Math.random() * (index + 1));
    //         [content[index], content[j]] = [content[j], content[index]];
    //     });
    //     return content;
    // };

    contentInRandomOrder({content: decalList})


    return (
        <>
            <div className="contentBox"></div>

            {decalList.slice(0, 9).map((item) => {
                return <a href={`http://localhost:3000/decals/${item.id}`}
                          id="decalLink"
                          title="Click to decalId page"
                          key={item.id}>
                    <section className="content">
                        {/*{console.log(item.id)}*/}
                        <h4>{item.name}</h4>
                        <h4>{item.car.name}</h4>
                        <h5>{item.company}
                            <p>Located: {item.decalPosition}</p>
                        </h5>
                    </section>
                </a>


            })}

            {/*<section className="content">Block 2</section>*/}
            {/*<section className="content">Block 3</section>*/}

            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong collecting the data...</p>}
        </>


    );
}

export default DecalFrame;