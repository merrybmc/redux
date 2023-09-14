import { atom, selector } from 'recoil';

export const textSize = atom({ key: 'textSize', default: 20 });
export const textColor = atom({ key: 'textColor', default: 'black' });

export const textState = atom({ key: 'textState', default: { size: 20, color: 'black' } });

export const bgState = selector({
  key: 'bgState',
  get: ({ get }) => {
    const size = get(textSize);
    if (size >= 60) return 'gray';
    else return 'skyblue';
  },
});

export const customSize = selector({
  key: 'customSize',
  get: ({ get }) => {
    const size = get(textSize);
    return size;
  },
  set: ({ set }, newValue) => {
    set(textSize, (prevState) => prevState + Number(newValue));
  },
});
