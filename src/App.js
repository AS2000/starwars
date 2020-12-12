import * as React from 'react';
import AppContext from './context/AppContext';
import Main from './pages/Main/Main';

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
        <Main />
    </AppContext.Provider>
  );
}

export default App;
