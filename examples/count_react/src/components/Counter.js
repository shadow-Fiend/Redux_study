import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { value, add, subtract } = this.props

		return (
			<p>
				click {value} times
				{ ' ' }
				<button onClick={add}> + </button>
				{ ' ' }
				<button onClick={subtract}> - </button>
			</p>
		)
	}
}

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	add: PropTypes.func.isRequired,
	subtract: PropTypes.func.isRequired
}

export default Counter