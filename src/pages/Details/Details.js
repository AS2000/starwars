import * as React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

import AppContext from '../../context/AppContext';

const Details = () => {
    const { starwarsCharacters = [] } = React.useContext(AppContext);
    const history = useHistory();
    const { id } = useParams();

    const character = starwarsCharacters.find((el) => el.id ===  parseInt(id));
    console.log('character: ', character);

    return (
        <div>
            <div>
                <Link to="/">Back</Link>
            </div>
            <div>
                Details
            </div>
        </div>
    );
};

export default Details;
