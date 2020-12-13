import { Character, Characters } from './typings';
const _ = require('lodash');

export const cleanGraphqlResponse = (arr: Characters[]) =>
    _.map(arr, (obj: Character)  => _.omit(obj, ['__typename'])
);
