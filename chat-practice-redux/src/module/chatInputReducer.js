// Action Type
const _SAVE = 'DATA_SAVE';

// 액션 생성함수
// dispatch로 보낼 Action 객체 정의
export const saveChatMessage = (saveData) => (
    console.log('saveData :: ', saveData),
    {
    type: _SAVE,
    inputData: {
        content: saveData
    },
})
 
// initState
const initialState = {
    inputData: {
        content: ''
    }
}
 
// Reducer
const chatInputReducer = (state = initialState, action) => {
// export default function chatInputReducer(state = initialState, action) {
    console.log('리듀서 파라미터 초기값 :',state.inputData.content);
    console.log('리듀서 파라미터 액션타입',action.type);
    console.log('리듀서 파라미터 액션 값',action.inputData);
    
    switch(action.type) {
        case _SAVE:
            return Object.assign({}, state, {
                inputData: {
                    content: action.inputData.content
                }
            })
        default:
            return state;
    }
}
export default chatInputReducer;