import React, { PropTypes } from 'react'

class AddText extends React.Component {
	static displayName = 'AddPost'

	static propTypes = {
		'addTextToPost': PropTypes.func
	}

	handleSubmit(event, node, cb) {
		if (event.keyCode === 13) {
			console.log('Enter!!')
			console.log(node)
			cb()
		}
	}

	render() {
		// console.log("ADD-TEXT: ", this.props)

		let input
		const { addTextToPost } = this.props
		// onKeyDown={this.handleSubmit(event, input)}
		return (
			<div className="AddText">
				<input
					ref={node => {
						input = node
					}}
					onKeyDown={(event) => {
						this.handleSubmit(event, input.value, () => {
							addTextToPost(input.value)
							input.value = ''
						})
					}}/>
				<button onClick={() => {
					addTextToPost(input.value)
					input.value = ''
				}}>
					Add Text
				</button>
			</div>
		)
	}
}

export default AddText
