import { atom } from 'recoil';

export const countState = atom({
    key: 'count',
    default: 0
});

export const songState = atom({
    key: 'song',
    default: []
});