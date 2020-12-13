import * as React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

import AppContext from '../../context/AppContext';

import { Character, Params } from '../../typings';

import './Details.css';

const Details = () => {
    const { starwarsCharacters = [] } = React.useContext(AppContext);
    const { id } = useParams<Params>();

    const character: Character | undefined = starwarsCharacters.find(
        (el) => el.id === id
    );

    const renderEpisode = (el: string, index: number) => (
        <p key={ `episode-${index}` }>{ el }</p>
    );

    const renderCharacterData = () => (
        <div className="fade">
            <section className="star-wars">
                <div className="crawl">
                    <div className="title">
                        <h1>{ character!.name }</h1>
                        <p>Participated in episodes:</p>
                    </div>
                    { character!.episodes.map(renderEpisode) }
                </div>
            </section>
        </div>
    );

    return (
        <div>
            <Spinner
                isLoading={ !character }
            />
            { character && renderCharacterData() }
        </div>
    );
};

export default Details;
