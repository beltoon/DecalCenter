import axios from "axios";
import React, {useState} from "react";

function DeleteDecal(){
    const [decalIdForDelete, setDecalIdForDelete] = useState('');
    const [addSucces, toggleAddSuccess] = useState(false);

    async function deleteDecal(e) {
        e.preventDefault();
        try {
            const result = await axios.delete(`http://localhost:8080/decals/${decalIdForDelete}`)
            console.log(result)
            toggleAddSuccess(true);
        } catch (e) {
            console.error(e)
        }
    }
    return(
        <article>
            {addSucces === true && <p>Decal has been deleted!</p>}
            <form onSubmit={deleteDecal}>
                <h3>Delete Livery from database</h3>
                <label htmlFor="delete-decal">
                    <h4>Decal Id:</h4>
                    <input
                        type="text"
                        name="delete-decal"
                        id="delete-decal"
                        placeholder="<e.g. 1>"
                        value={decalIdForDelete}
                        onChange={(e) => setDecalIdForDelete(e.target.value)}/>
                </label>
                <button type="submit">
                    Delete Livery
                </button>
            </form>
        </article>
    )
}

export default DeleteDecal;