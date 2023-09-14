import { atom, selector } from 'recoil';

export const counter = atom({ key: 'counter', default: 0 });

export const todoListFilterState = atom({ key: 'todoListFilterState', default: 'Show All' });

export const fliteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);

    switch (filter) {
      case 'Hello':
        return 'Hello World';
      default:
        return 'None';
    }
  },
});

export const testSelector = selector({
  key: 'testSelector',
  get: ({ get }) => {
    const todoFilterState = get(todoListFilterState);
    const StateLength = todoFilterState.length;

    return {
      todoFilterState,
      StateLength,
    };
  },
});

export const jobListState = atom({
  key: 'jobListState',
  default: [],
});

export const completedJobsSelector = selector({
  key: 'completedJobsSelector',
  get: ({ get }) => {
    const jobList = get(jobListState);
    const completed = jobList.filter((el) => el.isDone);
    return completed;
  },
});

export const mphState = atom({
  key: 'mphState',
  default: 0,
});

export const kphState = selector({
  key: 'kphState',
  get: ({ get }) => {
    const mph = get(mphState);
    return mph * 1.609;
  },
  set: ({ set }, newValue) => {
    set(mphState, newValue / 1.609);
  },
});
