import React from 'react'
import FilterLink from './FilterLink'

class Footer extends React.Component {
	static displayName = 'Footer'

	render() {
		return (
			<div className="Footer">
				Show:
				{" "}
				<FilterLink filter="SHOW_ALL" {...this.props}>
					All
				</FilterLink>
				{", "}
				<FilterLink filter="SHOW_ACTIVE" {...this.props}>
				  Active
				</FilterLink>
				{", "}
				<FilterLink filter="SHOW_COMPLETED" {...this.props}>
				  Completed
				</FilterLink>
			</div>
		)
	}
}

export default Footer
