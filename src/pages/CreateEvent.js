import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";

function CreateEvent() {
    return(
        <div className="page-container">
            <PageHeader title="create-event"/>


            <p>HIER KAN JE EEN EVENT AANMAKEN</p>

            <form action="test">
                <label>
                    
                    <select>
                        <option value="grapefruit">grapefruit</option>
                        <option value="apple">apple</option>
                    </select>
                </label>
            </form>


            <button>CREATE EVENT</button>
        </div>
    )
}

export default CreateEvent;