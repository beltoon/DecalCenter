import React, {useState} from "react";
import axios from "axios";

function AddEvent() {
    const [eventName, setEventName] = useState('');
    const [privateEvent, setPrivateEvent] = useState('');
    const [eventDate, setEventDate] = useState('');

    const [addSucces, toggleAddSuccess] = useState(false);

    async function addEvent(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", eventName);
        formData.append("private event", privateEvent);
        formData.append("event date", eventDate);

        try {
            const result = await axios.post(`http://localhost:8080/events`, formData,
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
                {addSucces === true && <h3>Event has been added!</h3>}
                <form onSubmit={addEvent}>
                    <h3>Add Event to database</h3>
                    <label htmlFor="event-name">
                        Event name:
                        <input
                            type="text"
                            name="event-name-field"
                            id="event-name"
                            placeholder="<e.g. 24hr Le Mans>"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}/>
                    </label>

                    <label htmlFor="car-brand">
                        Car Brand:
                        <input
                            type="text"
                            name="car-brand-field"
                            id="car-brand"
                            placeholder="<Car Manufacturer"
                            value={privateEvent}
                            onChange={(e) => setPrivateEvent(e.target.value)}/>
                    </label>

                    <label htmlFor="car-type">
                        Car Type:
                        <input
                            type="text"
                            name="car-type"
                            id="car-type"
                            placeholder="<e.g. Road, Oval or Prototype"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}/>
                    </label>

                    <button type="submit">
                        Add Event
                    </button>
                </form>
            </div>
        </article>
    )
}

export default AddEvent;