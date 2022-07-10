import React, {useEffect, useState} from 'react';
import axios from "axios";
import placeholder from "../assets/coming soon.png";

function EventContent( {endpoint} ) {
    const [content, setContent] = useState(null);

    useEffect(() => {
        console.log(endpoint);

        async function fetchEventContentData() {
            try {
                const {data} = await axios.get(endpoint);
                setContent(data);
            } catch (e) {
                console.error(e)
            }
        }

        fetchEventContentData();
    }, [endpoint]);

    return (
        <section>
            {content &&
                <>

                    <img
                        alt="afbeelding decal"
                        src={placeholder}/>

                </>
                  }
        </section>
    );
}

export default EventContent;

