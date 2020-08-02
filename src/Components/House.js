import React from 'react';
import { NewRoomForm } from './NewRoomForm';

/**
 *
 * @param {house: {_id: string, rooms: []}, updateHouse: (updatedHouse)=> void} props
 *
 * House is only concerned with rendering itself. Updating the house is a callback function
 * to the component who actually renders the house in order to manage state.
 */
export const House = (props) => {
    const { house, updateHouse } = props;

    // this can be reduced to one line.
    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    };

    // fully reduced
    const addNewRoom = (room) =>
        updateHouse({
            ...house,
            rooms: [...house.rooms, room]
        });

    // This is small enough to be included in House, I extracted from render() purely as example, would leave in normally.
    const rooms = () => (
        <ul className={'rooms-list'}>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name} Area: ${room.area}`}</label>
                    <button onClick={(e) => deleteRoom(room._id, house._id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );

    return (
        <div className={'house'}>
            <h1>{house.name}</h1>
            {
                // Notice multiple ways to render a react element
                rooms({ rooms, houseId: house._id, deleteRoom })
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};
