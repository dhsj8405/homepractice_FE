const initialState = {
	value: 0
}

export default function addsubReducer(state = initialState, action) {
	switch (action.type) {
		case 'increment': {
			return {
				...state,
				value: state.value + 1
			}
		}
		case 'decrement': {
			return {
				...state,
				value: state.value - 1
			}
		}
		case 'reset': {
			return {
				...state,
				value: 0
			}
		}
		default:
			return state
	}
}