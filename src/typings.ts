export type Character = {
    id: string;
    name: string;
    image: string;
    episodes: string[];
};

export type Characters = Character[] | undefined;

export type AppContext = {
    starwarsCharacters: Characters;
    loading: boolean;
};

export type Params = {
    id: string;
}