import React, { PropTypes } from 'react'

class AddTag extends React.Component {
	static displayName = 'AddTag'

	static propTypes = {
		'addTagToPost': PropTypes.func
	}

	handleSubmit(event, node, cb) {
		if (event.keyCode === 13) {
			console.log('Enter!!')
			console.log(node)
			cb()
		}
	}

	render() {
		let input
		const { addTagToPost } = this.props
		// onKeyDown={this.handleSubmit(event, input)}
		return (
			<div className="AddTag">
				<input
					ref={node => {
						input = node
					}}
					onKeyDown={(event) => {
						this.handleSubmit(event, input.value, () => {
							addTagToPost(input.value)
							input.value = ''
						})
					}}/>
				<button onClick={() => {
					addTagToPost(input.value)
					input.value = ''
				}}>
					Add Tag
				</button>
			</div>
		)
	}
}

export default AddTag
