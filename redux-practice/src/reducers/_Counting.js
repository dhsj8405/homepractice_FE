const initialState = {
	count: 0
}

export default function countingReducer(state = initialState, action) {
	switch (action.type) {
		case 'push': {
			return {
				...state,
				count: state.count + 1
			}
		}
		default:
			return state
	}
}