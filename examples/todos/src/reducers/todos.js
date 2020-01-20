/*
* 根据 action 的 todo 动作来更新数据 state
* ADD_TODO 添加数据
* TOGGLE_TODIO 改变当前数据的 completed 属性值
*/

const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map(todo => 
				(todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
			)
		default:
			return state
	}
}

export default todos