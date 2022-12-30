import { atom, selector } from 'recoil';

export const countState = atom({
    key : 'countState',
    default : 0,
});

export const inputState = atom({
    key : 'inputState',
    default : '',
});

export const countInputState = selector({
    key : 'countTitleState',
    get : ({ get }) => {
        return `Now count is ${get(countState)}, Input value is ${get(inputState)}`
    },
    //selector내부의 set을 이용해서 여러개의 atom정보를 동시수정가능
    set : ({ set }, newValue) => {              //2번째 파라미터에는 추가로 받을 인자
        set(countState, Number(newValue));      //count atom수정
        set(inputState, Number(newValue));      //input atom수정
    }
});

