import * as React from 'react';
import AppContext from './context/AppContext';
import Routes from './routes/Ruotes';
import { useQuery } from '@apollo/client';

import { GET_CHARACTERS } from './api/requestConstants';
import { cleanGraphqlResponse } from './utils';
import { Characters } from './typings';


const App = () => {
const [starwarsCharacters, setStarwarsCharaters] = React.useState<Characters>();
const { loading, error, data } = useQuery(GET_CHARACTERS);

React.useEffect(() => {
    data && setStarwarsCharaters(cleanGraphqlResponse(data.feed));
},[data]);

if (error) {
    console.error("API Error");
};

    return (
        <AppContext.Provider
            value={{
                starwarsCharacters,
                loading,
            }}
        >
            <Routes />
        </AppContext.Provider>
    );
};

export default App;
