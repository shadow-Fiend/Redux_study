let nextTodoId = 0


// 增加元素到列表 action
export const addTodo = text => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text
})


// 显隐列表筛选 action
export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})

// 元素显隐属性点击 action
export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
})