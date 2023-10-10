import { atom } from 'recoil';

export const resultState = atom({
  key: 'resultState',
  default: 0,
});

export const inputValueState = atom({
  key: 'inputValueState',
  default: '',
});
