let nextTodoId = 0

// 添加条目
export const addTodo = text => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text
})

// 设置显隐
export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})

// 点击条目
export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
})

// 设置状态元数据
export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}