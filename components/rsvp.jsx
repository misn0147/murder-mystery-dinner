import React from "react";

const RSVP = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [attending, setAttending] = React.useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Submit the RSVP to your server or save it to local storage
        // For this example, we'll just log the values to the console
        console.log(`Name: ${name}, Email: ${email}, Attending: ${attending}`);
    };

    return (
        <form className="p-4" onSubmit={handleSubmit}>
            <label className="block mb-2 font-bold text-lg">
                Name:
                <input
                    className="form-input mt-1 block w-full"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>

            <label className="block mb-2 font-bold text-lg">
                Email:
                <input
                    className="form-input mt-1 block w-full"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>

            <label className="block mb-2 font-bold text-lg">
                Attending:
                <input
                    className="form-radio mt-1"
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={attending === "yes"}
                    onChange={(event) => setAttending(event.target.value)}
                />
                Yes
                <input
                    className="form-radio mt-1"
                    type="radio"
                    name="attending"
                    value="no"
                    checked={attending === "no"}
                    onChange={(event) => setAttending(event.target.value)}
                />
                No
            </label>

            <button className="btn mt-4" type="submit">
                Submit RSVP
            </button>
        </form>
    );
};

export default RSVP;
