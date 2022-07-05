import React, {useEffect, useState} from 'react';
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

    const [cars, setCars] = useState([]);
    const [id, setId] = useState(1);

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
        formData.append("name", decalName);
        formData.append("company", brand);
        formData.append("decalPosition", decalPosition);
        formData.append("series", series);
        formData.append("Car", id);

        // hier nog user toevoegen (creator)


        console.log(series)
        console.log(id)

        try {
            // verstuur ons formData object en geef in de header aan dat het om een form-data type gaat
            // Let op: we wijzigen nu ALTIJD de afbeelding voor student 1001, als je een andere student wil kiezen of dit dynamisch wil maken, pas je de url aan!
            // const result = await axios.post('http://localhost:8080/decals/1001/', formData,
            const result = await axios.post(`http://localhost:8080/decals/file`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
            console.log(result.data);
            toggleAddSuccess(true);

        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await axios.get('http://localhost:8080/cars');
                // console.log(response.data)
                setCars(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchCars();
    }, []);

    return (
        <div>
            {addSucces === true && <p>Decal has been added!</p>}
            <form onSubmit={sendImage}
            >
                <label htmlFor="car-id">
                    Car:
                    <select
                        name="CarId"
                        type="dropdown"
                        id="carId"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    >
                        {cars.map((car) => {
                            return <option value={car.id}
                                key={car.id}>
                               {car.name}
                            </option>
                        })}
                    </select>


                </label>

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
                <label htmlFor="decal-image">
                    Choose image:
                    <input type="file" name="image-field" id="decal-image" onChange={handleImageChange}/>
                </label>
                {previewUrl &&
                    <label>
                        Preview:
                        <img src={previewUrl} alt="Voorbeeld van de afbeelding die zojuist gekozen is"
                             className="image-preview"/>
                    </label>
                }

                <button type="submit">
                    Add decal
                </button>
            </form>
        </div>
    );
}

export default ImageRequestPage;