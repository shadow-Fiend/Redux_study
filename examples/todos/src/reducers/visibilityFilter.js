import { VisibilityFilters } from '../actions'

// 点击底部筛选 action 根据其 type 返回相应的数据 
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
	switch(action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default: 
			return state
	}
}

export default visibilityFilter