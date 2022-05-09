// Action Type
const _SAVE = 'DATA_SAVE';

// 액션 생성함수 만들기
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
export default function chatReducer(state = initialState, action) {
    console.log(state.inputData)
    console.log(action)
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