import React, { PropTypes } from 'react'

class FilterLink extends React.Component {
	static displayName = 'FilterLink'

	static propTypes = {
		'filter': PropTypes.string,
		'children': PropTypes.string,
		'setVisibilityFilter': PropTypes.func,
		'visibilityFilter': PropTypes.string
	}

	constructor(props) {
		super(props)
		const { filter, visibilityFilter} = this.props
		this.state = {
			active: filter === visibilityFilter
		}
	}

	componentWillReceiveProps(nextProps) {
		const { filter, visibilityFilter} = nextProps
		this.setState({
			active: filter === visibilityFilter
		})
		return true
	}

	render() {
		const { setVisibilityFilter, filter, children} = this.props
		const { active } = this.state

		if (active) return <span>{children}</span>

		return (
			<a href="#" onClick={() => {
				setVisibilityFilter(filter)
			}}>
				{children}
		  </a>
		)
	}
}

export default FilterLink
