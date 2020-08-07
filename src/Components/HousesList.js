import React from 'react';
import { House } from './House';
import { housesApi } from '../rest/HousesApi.js';

export class HousesList extends React.Component {
    state = {
        houses: [],
        isLoading: true
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses, isLoading: false });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        // Could be more efficient by updating the house in state instead of fetching them all again.
        // The return from the api gives back the updated house. find and replace in state to avoid making new call.
        this.fetchHouses();
    };

    render() {
        // could have logic needed at render.
        return this.state.isLoading ? (
            <h1>Loading...</h1>
        ) : (
            <div className='house-list'>
                {this.state.houses.map((house) => (
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                    />
                ))}
            </div>
        );
    }
}
