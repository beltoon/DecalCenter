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
        const uploadedFile = e.target.files[0];

        setFile(uploadedFile);
        setPreviewUrl(URL.createObjectURL(uploadedFile));
    }

    async function sendImage(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", decalName);
        formData.append("company", brand);
        formData.append("decalPosition", decalPosition);
        formData.append("series", series);
        formData.append("Car", id);

        try {
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
        async function fetchCarsForUpload() {
            try {
                const response = await axios.get('http://localhost:8080/cars');
                setCars(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchCarsForUpload();
    }, []);

    return (


        <article className="page-container">

            <form onSubmit={sendImage}
            >
                <label htmlFor="car-id">
                    <h4>Car:</h4>
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
                    <h4>Decal name:</h4>
                    <input
                        type="text"
                        name="decal-name-field"
                        id="decal-name"
                        value={decalName}
                        onChange={(e) => setDecalName(e.target.value)}/>
                </label>

                <label htmlFor="brand-name">
                    <h4>Brand:</h4>
                    <input
                        type="text"
                        name="brand-field"
                        id="brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}/>
                </label>

                <label htmlFor="series">
                    <h4>Decal Position:</h4>
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
                    <h4>Series:</h4>
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
                    <h4>Choose image:</h4>
                    <input type="file"
                           typeof="png"
                           name="image-field"
                           id="decal-image"
                           accept=".png"
                           onChange={handleImageChange}/>
                </label>
                {previewUrl &&
                    <label>
                        <h4>Preview:</h4>
                        <img src={previewUrl} alt="preview"
                             className="image-preview"/>
                    </label>
                }
                {addSucces === true && <h4>Decal has been added!</h4>}

                {addSucces === true ? <a href="/upload-decal">
                    <button type="button">Upload new decal</button>
                </a> : <button type="submit">
                    Add decal
                </button>
                }

            </form>
        </article>
    );
}

export default ImageRequestPage;