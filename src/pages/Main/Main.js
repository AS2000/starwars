import * as React from 'react';
import AppContext from '../../context/AppContext';

const Main = () => {
    const { starwarsCharacters } = React.useContext(AppContext);

    return (
        <div>
            Main Page
        </div>
    );
};

export default Main;