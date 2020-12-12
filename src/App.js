import * as React from 'react';
import AppContext from './context/AppContext';
import Routes from './routes/Ruotes';

import { characters } from './mock/mock';

function App() {
const [starwarsCharacters, setStarwarsCharaters] = React.useState();

React.useEffect(() => {
    setStarwarsCharaters(characters);
},[]);

  return (
    <AppContext.Provider
        value={{
            starwarsCharacters,
        }}
    >
        <Routes />
    </AppContext.Provider>
  );
}

export default App;
