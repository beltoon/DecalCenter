import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./ContentBlock.css"
import Button from "./button/Button";
import Content from "./Content";

function ContentBlock () {
    const [contentList, setContentList] = useState([]);

    //ENDPOINT MOET NOG AANGEMAAKT WORDEN

    const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);
            setError(false);
            try {
                const {data} = await axios.get(endpoint);
                setContentList(data);
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

                    {contentList.results && contentList.results.map((content) => {
                        return <Content key={content.name} endpoint={content.url}/>
                    })}
                </>
            }
            {loading && <p>Loading...</p>}
            {error && <p>Data couldn't be collected</p>}
        </div>
    );
}



            // <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>
            //     <img className="content" src="https://www.zuidplein.nl/cleaner/wp-content/uploads/2013/03/image-alignment-300x200-300x200.jpg" alt=""/>



export default ContentBlock;