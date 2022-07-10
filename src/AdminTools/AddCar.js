import React, {useState} from "react";
import axios from "axios";

function AddCar() {
    const [carName, setCarName] = useState('');
    const [carBrand, setCarBrand] = useState('');
    const [carType, setCarType] = useState('');
    const [carCategory, setCarCategory] = useState('');
    const [addSucces, toggleAddSuccess] = useState(false);

    async function addCar(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", carName);
        formData.append("brand", carBrand);
        formData.append("type", carType);
        formData.append("category", carCategory);

        try {
            const result = await axios.post(`http://localhost:8080/cars`, formData,
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

    return (
        <article>
            <div>
                {addSucces === true && <p>Car has been added!</p>}
                <form onSubmit={addCar}>
                    <h3>Add Car to database</h3>
                    <label htmlFor="car-name">
                        <h4>Car name:</h4>
                        <input
                            type="text"
                            name="car-name-field"
                            id="car-name"
                            placeholder="<full car name as listed by iRacing>"
                            value={carName}
                            onChange={(e) => setCarName(e.target.value)}/>
                    </label>

                    <label htmlFor="car-brand">
                        <h4>Car Brand:</h4>
                        <input
                            type="text"
                            name="car-brand-field"
                            id="car-brand"
                            placeholder="<Car Manufacturer"
                            value={carBrand}
                            onChange={(e) => setCarBrand(e.target.value)}/>
                    </label>

                    <label htmlFor="car-type">
                        <h4>Car Type:</h4>
                        <input
                            type="text"
                            name="car-type"
                            id="car-type"
                            placeholder="<e.g. Road, Oval or Prototype"
                            value={carType}
                            onChange={(e) => setCarType(e.target.value)}/>
                    </label>
                    <label htmlFor="car-category">
                        <h4>Car Category:</h4>
                        <input
                            type="text"
                            name="car-category"
                            id="car-category"
                            placeholder="<e.g. GT3 or F4"
                            value={carCategory}
                            onChange={(e) => setCarCategory(e.target.value)}/>
                    </label>
                    <button type="submit">
                        Add Car
                    </button>
                </form>
            </div>
        </article>
    )
}

export default AddCar;