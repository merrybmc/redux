설치

npm install @reduxjs/toolkit react-redux



# 리덕스 툴킷

## 리덕스와 가장 큰 차이점

액션과 액션 생성함수를 만들어줄 필요가 없다.

### createSlice

리듀서를 생성하고 액션 함수를 자동으로 생성해주는 기능을 제공한다.



## 형태

```react
const userSlice = createSlice({
    name: "userSlice", // 리덕스 식별자
    initialState: "Cho Byeong Min", // 리듀서의 초기값
    reducers: { // 상태 수정을 위해 액션 대신 쓰이는 리듀서 함수
        changeName(state) {
            return state + "Hello";
        }
        inputName(state, action) {
    		return state + action.payload;
		}
    }
});

// dispatch에 액션 대신 쓰기위한 함수를 export
export const { changeName, inputName } = userSlice.actions;

// configureStore = rootReducer
export default configureStore({
  reducer: {
    user: user.reducer, // subReducer
    user2: user2.reducer,
    user3: user3.reducer,
  },
});

```

