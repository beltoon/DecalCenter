import React, {useState} from 'react';
import PageHeader from "../components/PageHeader/PageHeader";
import axios from "axios";
import ImageRequestPage from "../components/UploadFile/ImageRequestPage";


function UploadDecalPage() {
    const [decalName, setDecalName] = useState('');
    const [brand, setBrand] = useState('');
    const [decalPosition, setDecalPosition] = useState('side');
    const [series, setSeries] = useState('regular');
    const [addSucces, toggleAddSuccess] = useState(false);

    async function addImageDecal(e) {
        // voorkom refresh
        e.preventDefault();
        console.log(decalName, brand, decalPosition);

        try {
            // Verstuur de data in een object en zorg dat de keys overeenkomen met die in de backend
            const response = await axios.post('http://localhost:8080/decals', {
                name: decalName,
                company: brand,
                decalPosition: decalPosition,
                series: series,
            });

            console.log(response.data);
            toggleAddSuccess(true);
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <div className="page-container">
            <PageHeader page="UPLOAD" intro="Snel een beetje"/>

            {addSucces === true && <p>Decal has been added!</p>}
            <ImageRequestPage/>
            <form onSubmit={addImageDecal}>
                <label htmlFor="decal-name">
                    Decal name:
                    <input
                        type="text"
                        name="decal-name-field"
                        id="decal-name"
                        value={decalName}
                        onChange={(e) => setDecalName(e.target.value)}/>
                </label>
                <label htmlFor="brand-name">
                    Brand:
                    <input
                        type="text"
                        name="brand-field"
                        id="brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}/>
                </label>
                <label htmlFor="series">
                    Decal Position:
                    <select
                        id="decalPosition"
                        name="decal-position-field"
                        value={decalPosition}
                        onChange={(e) => setDecalPosition(e.target.value)}
                    >
                        <option value="side">
                            Side
                        </option>
                        <option value="front">
                            front
                        </option>
                        <option value="rear">
                            Rear
                        </option>
                        <option value="Total car branding">
                            Total car branding
                        </option>
                    </select>
                </label>
                <label htmlFor="series">
                    Series:
                    <select
                        id="series"
                        name="series-field"
                        value={series}
                        onChange={(e) => setSeries(e.target.value)}>
                        <option value="regular">
                            Regular
                        </option>
                        <option value="IMSA">
                            IMSA
                        </option>
                        <option value="private-league">
                            Private League
                        </option>
                    </select>
                </label>

                <button type="submit">
                    Add decal
                </button>
            </form>

        </div>
    );
}

export default UploadDecalPage;