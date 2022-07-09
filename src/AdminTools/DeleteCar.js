import axios from "axios";
import React, {useState} from "react";

function DeleteCar() {
    const [carIdForDelete, setCarIdForDelete] = useState('');
    const [addSucces, toggleAddSuccess] = useState(false);

    async function deleteCar(e) {
        e.preventDefault();
        try {
            const result = await axios.delete(`http://localhost:8080/cars/${carIdForDelete}`)
            console.log(result)
            toggleAddSuccess(true);
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <article>
            {addSucces === true && <p>Car has been deleted!</p>}
            <form onSubmit={deleteCar}>
                <h3>Delete Car from database</h3>
                <label htmlFor="delete-car">
                    Car Id:
                    <input
                        type="text"
                        name="delete-car"
                        id="delete-car"
                        placeholder="<e.g. 1>"
                        value={carIdForDelete}
                        onChange={(e) => setCarIdForDelete(e.target.value)}/>
                </label>
                <button type="submit">
                    Delete Car
                </button>
            </form>
        </article>
    )
}

export default DeleteCar;