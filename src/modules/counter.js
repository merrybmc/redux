// 액션 타입 정의
// 액션 타입은 대문자로 정의
// 문자열 내용은 모듈 이름/액션 이름 형태로 작성
// 문자열안에 모듈 이름을 넣는 이뉴는 나중에 액ㄷ션의 이름이 충돌되지 않게 하기 위해서
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태 설정
const initialState = {
  number: 0,
};

// 리듀서 함수 만들기
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
