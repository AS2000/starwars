export type Character = {
    id: number;
    name: string;
    image: string;
    episodes: string[];
};

export type Characters = Character[] | undefined;

export type AppContext = {
    starwarsCharacters: Characters;
};

export type Params = {
    id: string;
}