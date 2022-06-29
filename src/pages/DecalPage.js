import React from "react";


function DecalPage() {
    return (
        <div className="page-container">
            <header className="header-container">
                <h1>Welcome on the Decal page</h1>
            </header>

            <article className="article container">
                <div>LINKS EEN AFBEELDING VAN DE DECAL</div>

                <div>RECHTS INFORMATIE VAN DE DESBETREFFENDE DECAL
                    <ul>
                        <li>name
                        </li>
                        <li>creator
                        </li>
                        <li>decal position
                        </li>
                    </ul></div>
            </article>


            <p>Dit is een decal page</p>


            {/*<Content endpoint={"https://pokeapi.co/api/v2/pokemon/ditto"}/>*/}


        </div>
    )
}

export default DecalPage;