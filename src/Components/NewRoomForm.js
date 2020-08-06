import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        // basic input validation. Only setState if value is a positive number.
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
        // How would you inform the user the value they entered is invalid?
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({ name, area });
            setName('');
            setArea('');
        } else {
            // form validation could go here.
        }
    };

    return (
        <div className='new-room-form'>
            <h4>Add a new room</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='text'
                    placeholder='Area'
                    onChange={handleAreaInput}
                    value={area}
                />
                {/* how could you show this button as disabled/enabled based on form validation? */}
                <button type='submit'>Add Room</button>
            </form>
        </div>
    );
};
