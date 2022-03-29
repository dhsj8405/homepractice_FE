// atom.js
import { atom } from 'recoil';

export let countState = atom({
  key: 'counter', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export let inputState = atom({    // 기존에서 추가된 아톰.
  key: 'input',
  default: 0,
});
