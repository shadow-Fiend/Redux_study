import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import reduceFun from './reducers'

const store = createStore(reduceFun)
const rootEle = document.getElementById('root')

const render = () => ReactDOM.render(
	<Counter 
		value={store.getState()}
		add={() => store.dispatch({ type: 'ADD' })}
		subtract={() => store.dispatch({ type: 'SUBTRACT' })}
	/>,
	rootEle
)

render()
store.subscribe(render)