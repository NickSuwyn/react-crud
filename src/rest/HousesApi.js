const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    get = async () => {
        try {
            // response has other fancy items like headers.
            const resp = await fetch(HOUSES_ENDPOINT);
            // data represents the body of the response.
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('Opps, Looks like fetchHouses had an issues. ', e);
        }
    };

    put = async (house) => {
        try {
            // Looking at the docs to find correct path
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch (e) {
            console.log(
                'Opps, Looks like there was a problem updating your house: ',
                e
            );
        }
    };
}

export const housesApi = new HousesApi();
