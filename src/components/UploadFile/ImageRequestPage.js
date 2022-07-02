import React, {useState} from 'react';
import './ImageRequestPage.css';
import axios from 'axios';

function ImageRequestPage() {
    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');

    const [decalName, setDecalName] = useState('decalName');
    const [brand, setBrand] = useState('brand');
    const [decalPosition, setDecalPosition] = useState('side');
    const [series, setSeries] = useState('regular');
    const [addSucces, toggleAddSuccess] = useState(false);

    function handleImageChange(e) {
        // Sla het gekozen bestand op
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile);
        // Sla het gekozen bestand op in de state
        setFile(uploadedFile);
        // Sla de preview URL op zodat we deze kunnen laten zien in een <img>
        setPreviewUrl(URL.createObjectURL(uploadedFile));
    }

    async function sendImage(e) {
        // Voorkom een refresh op submit
        e.preventDefault();
        // maak een nieuw FormData object (ingebouwd type van JavaScript)
        const formData = new FormData();
        // Voeg daar ons bestand uit de state aan toe onder de key "file"
        formData.append("file", file);

        try {
            // verstuur ons formData object en geef in de header aan dat het om een form-data type gaat
            // Let op: we wijzigen nu ALTIJD de afbeelding voor student 1001, als je een andere student wil kiezen of dit dynamisch wil maken, pas je de url aan!
            // const result = await axios.post('http://localhost:8080/decals/1001/', formData,
            const result = await axios.post(`http://localhost:8080/upload/`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
            console.log(result.data);
        } catch (e) {
            console.error(e)
        }

        // e.preventDefault();
        // console.log(decalName, brand, decalPosition);

        try {
            // Verstuur de data in een object en zorg dat de keys overeenkomen met die in de backend
            const response = await axios.post('http://localhost:8080/decals/', {
                name: decalName,
                company: brand,
                decalPosition: decalPosition,
                series: series,
             });

            console.log(response.data);
            toggleAddSuccess(true);
        } catch (e) {
            console.error(e);
        }


    }



return (
    <div>
        {addSucces === true && <p>Decal has been added!</p>}
        <form onSubmit={sendImage}>
            <label htmlFor="decal-image">
                Choose image:
                <input type="file" name="image-field" id="decal-image" onChange={handleImageChange}/>
            </label>
            {/*Als er een preview url is, dan willen we deze in een afbeelding tonen*/}
            {previewUrl &&
                <label>
                    Preview:
                    <img src={previewUrl} alt="Voorbeeld van de afbeelding die zojuist gekozen is"
                         className="image-preview"/>
                </label>
            }
            {/*<button type="submit">Upload file</button>*/}
            <label htmlFor="decal-name">
                Decal name:
                <input
                    type="text"
                    name="decal-name-field"
                    id="decal-name"
                    value={decalName}
                    onChange={(e) => setDecalName(e.target.value)}/>
            </label>
          {/*<label htmlFor="car-id">*/}
          {/*  Id:*/}
          {/*  <input*/}
          {/*      type="text"*/}
          {/*      name="Id-field"*/}
          {/*      id="id"*/}
          {/*      value={id}*/}
          {/*      onChange={(e) => setId(e.target.value)}/>*/}
          {/*</label>*/}
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

export default ImageRequestPage;