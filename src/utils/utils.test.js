import { cleanGraphqlResponse } from './utils';

const arrayForTest = [
    {
        id: 1,
        name: "Shmi Skywalker",
        image: "https://static.wikia.nocookie.net/starwars/images/a/ad/ShmiSkywalkerDatabank_%28Repurposed%29.jpeg",
        episodes: [
            "The Phantom Menace",
            "Attack of the Clones"
        ],
        __typename: "Characters"
    },
    {
        "id": 2,
        "name": "Anakin Skywalker",
        "image": "https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "episodes": [
            "Return of the Jedi"
        ],
        __typename: "Characters"
    },
];

const correctResult = [
    {
        id: 1,
        name: "Shmi Skywalker",
        image: "https://static.wikia.nocookie.net/starwars/images/a/ad/ShmiSkywalkerDatabank_%28Repurposed%29.jpeg",
        episodes: [
            "The Phantom Menace",
            "Attack of the Clones"
        ],
    },
    {
        "id": 2,
        "name": "Anakin Skywalker",
        "image": "https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "episodes": [
            "Return of the Jedi"
        ],
    },
];

test('Testing cleanGraphqlResponse Util', () => {
  expect(
    cleanGraphqlResponse(arrayForTest)).toStrictEqual(correctResult);
});
