import React, { PropTypes } from 'react'
import cn from 'classnames'

class Post extends React.Component {
	static displayName = 'Post'

	static propTypes = {
		'onPostClick': PropTypes.func,
		'onTextClick': PropTypes.func,
		'completed': PropTypes.bool,
		'text': PropTypes.string,
		'post': PropTypes.func,
		'postId': PropTypes.number,
		'textId': PropTypes.number,
		'currentPostId': PropTypes.any,
		'currentTextId': PropTypes.any,
		'isPostSelectedStyle': PropTypes.func,
		'isTextSelectedStyle': PropTypes.func,
		'texts': PropTypes.array,
		'textsById': PropTypes.object
	}

	constructor(props) {
		super(props)

		this.isPostSelectedStyle = this.isPostSelectedStyle.bind(this)
		this.isTextSelectedStyle = this.isTextSelectedStyle.bind(this)
	}

	componentWillReceiveProps() {
		// nextProps
		// console.log('COMPONENT-WILL-RECEIVE-PROPS: ')
		// console.log(nextProps.postId)
		// console.log(nextProps.currentPostId)
	}

	isPostSelectedStyle(isPostSelected) {
		console.log('IS-POST-SELECTED: ', isPostSelected)
		return ({
			borderColor: isPostSelected ? 'lime' : 'black',
			borderWidth: '4px'
		})
	}

	isTextSelectedStyle(isTextSelected) {
		console.log('IS-TEXT-SELECTED: ', isTextSelected)
		return ({
			borderColor: isTextSelected ? 'lime' : 'black',
			borderWidth: '4px'
		})
	}

	render() {
		console.log('POST-COMP: ', this.props)

		const {
			onPostClick, onTextClick,
			completed, postId, textId,
			currentPostId, currentTextId,
			texts, textsById } = this.props

		const PostClasses = cn('Post', {
			'complete': completed
		})

		let isPostSelected = false
		let isTextSelected = false

		if (currentPostId === postId) {
			isPostSelected = true
		}

		if (currentTextId === textId) {
			isTextSelected = true
		}

		return (
			<div className={PostClasses}
				onClick={onPostClick}
				style={this.isPostSelectedStyle(isPostSelected)}>

				{texts.map(text =>
					<div className="Text"
						key={textsById[text].id}
						id={textsById[text].id}
						onClick={onTextClick}
						style={this.isTextSelectedStyle(isTextSelected)}>
						{textsById[text].text}
					</div>
				)}
			</div>
		)
	}
}

export default Post
