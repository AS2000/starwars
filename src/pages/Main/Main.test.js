import { render, screen } from '@testing-library/react';
import AppContext from '../../context/AppContext';
import Main from './Main';

test('Main renders without crashing', () => {
    render(
        <AppContext.Provider
            value={{
                starwarsCharacters: [],
                loading: false,
            }}
        >
            <Main />
        </AppContext.Provider>
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
});