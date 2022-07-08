import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./ContentFrame.css"
import shuffleContent from "../helpers/shuffleContent";


function DecalFrame({endpoint}) {
    const [content, setContent] = useState([]);
    // const [endpoint, setEndpoint] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
            async function fetchData() {
                toggleLoading(true);
                setError(false);
                try {
                    const response = await axios.get(endpoint);
                    setContent(response.data);
                } catch (e) {
                    console.error(e);
                    setError(true);
                }
                toggleLoading(false)
            }

            fetchData();
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

    shuffleContent(content)


    return (
        <>
            <div className="contentBox"></div>
            {content.slice(0, 9).map((item) => {
                return <section className="content" key={item.id}>
                    <h4>{item.name}</h4>
                    <h4>{item.car.name}</h4>
                    <h5>{item.company}
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