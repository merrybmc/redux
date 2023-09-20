import { atom } from 'recoil';

export const count = atom({ key: 'count', default: 100 });

// 이게 리코일의 저장소에 상태에 기본 형태
// key는 상태에 대한 식별자 같은건데 이걸로 따로 뭘 하고 그런거는 없어요
// 대신에 다른 상태를 만들었을 때 key 이름을 중복 선언하면 에러가 나요
// 통상적으로 key 이름은 변수 이름하고 똑같이 지어줘요

// default는 초기값
// count = 0

// recoil 상태 작성 형태
