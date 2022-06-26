import React from "react";
import PageHeader from "../components/PageHeader";
import Content from "../components/Content";

function DecalPage () {
    return(
        <div className="page-container">
            <PageHeader title="decal"/>

            <p>Dit is een decal page</p>

            <Content endpoint={"http://localhost:8080/cars/1001"}/>
            {/*<Content endpoint={"https://pokeapi.co/api/v2/pokemon/ditto"}/>*/}


        </div>
    )
}

export default DecalPage;