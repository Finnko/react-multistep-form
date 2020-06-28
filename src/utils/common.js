import {routes} from '../const';

export const getPathIndex = (path) => routes.findIndex(route => route === path);
