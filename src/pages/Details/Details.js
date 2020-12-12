import * as React from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core/';

import AppContext from '../../context/AppContext';

import './Details.css';

const Details = () => {
    const { starwarsCharacters = [] } = React.useContext(AppContext);
    const { id } = useParams();

    const character = starwarsCharacters.find((el) => el.id ===  parseInt(id));
    console.log('character: ', character);

    const renderEpisode = (el, index) => (
        <p key={ `episode-${index}` }>{ el }</p>
    );

    const renderCharacterData = () => (
        <div className="fade">
            <section className="star-wars">
                <div className="crawl">
                    <div className="title">
                        <h1>{ character.name }</h1>
                        <p>Participated in episodes:</p>
                    </div>
                        { character.episodes.map(renderEpisode) }
                </div>
            </section>
        </div>
    );

    return (
        <div>
            { !character && (
                <CircularProgress color="secondary" />
            ) }
            { character && renderCharacterData() }
    </div>
    );
};

export default Details;
