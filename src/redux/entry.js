// 액션타입 정의
// 하나하나 치면 틀리니까 변수에 담아서 사용(reduxsample-product.js member.js 설명참고)
const GET_ENTRY = "GET_ENTRY";
const SET_ENTRY = "SET_ENTRY";
const SET_USER = "SET_USER";

//액션 실행함수 정의
// user는 DB에 들어갈 정보, getEntry는 응모확인페이지에 뿌려질 정보.
export const getEntry = (entry) => ({
  type: GET_ENTRY,
  score: entry.score,
  name: entry.name, 
});
export const setEntry = (score) => ({
  type: SET_ENTRY,
  score: score,
});

export const setUserInfo = (user) => ({
  type: SET_USER,
  name: user.name,
  email: user.email,
});

//리듀서 함수 기능 정의
// string을 변수에 담기. useState로 하던 그 행위 자체를 리덕스에서는 리듀서가 함
// 액션의 type에 따라 변화가 일어남
const initialState = {
  score: 0,
  name: "",
  email: "",
};

// 리듀서 함수 정의
const entry = (entryState = initialState, action) => {
  switch (action.type) {
    case GET_ENTRY:
      console.log("리덕스 GET_ENTRY", action);
      return {
        ...entryState,
        score: action.score,
        name: action.name,
      };

    case SET_ENTRY:
      console.log("리덕스 SET_ENTRY", entryState, action);
      return {
        ...entryState,
        score: action.score,
      };

    case SET_USER:
      console.log("리덕스 SET_USER", entryState, action);
      return {
        ...entryState,
        name: action.name,
        email: action.email,
      };

    default:
      return entryState;
  }
};

export default entry;
