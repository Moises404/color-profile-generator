import React, { PropTypes } from 'react'
// import mapValues from 'lodash/object/mapValues'
import { isEmpty } from 'lodash'
import Post from '../../components/Post/Post'

class PostList extends React.Component {
	static displayName = 'PostList'

	static propTypes = {
		'selectPost': PropTypes.func,
		'selectTextInPost': PropTypes.func,
		'post': PropTypes.any,
		'visibilityFilter': PropTypes.string,
		'dashboard': PropTypes.object
	}

	constructor(props) {
		super(props)
		const { post } = this.props

		// this.state = {
		// 	postList: this.getVisiblePostList(post.posts, visibilityFilter)
		// }

		// ,visibilityFilter

		this.state = {
			postList: post.posts
		}
	}

	componentWillReceiveProps() {
		// nextProps
		// const { post, visibilityFilter } = nextProps
		// this.setState({
		// 	postList: this.getVisiblePostList(postList, visibilityFilter)
		// })
	}

	getVisiblePostList(postList, filter) {
		switch (filter) {
			case 'SHOW_ALL' :
				return postList
			case 'SHOW_COMPLETED' :
				return postList.filter(
					p => p.completed
				)
			case 'SHOW_ACTIVE' :
				return postList.filter(
					p => !p.completed
				)
			default:
				return postList
		}
	}

	render() {
		console.log('RENDER: ')

		// const { selectPost, dashboard } = this.props
		const { postsById } = this.props.post
		let { postList } = this.state

		console.log('POST-LIST-COMP: ', postList)
		console.log('POST-BY-ID-COMP: ', postsById)

		if (!postList || isEmpty(postList)) {
			console.log('POST-LIST: ', postList)
			postList = []
		}

		// faved={post.faved}
		// {...post}
		// {...dashboard}

		return (
			<div className="PostList">
				{postList.map(post =>
					<Post
						{...postsById[post]}
						key={postsById[post].id}
						id={postsById[post].id}
						onPostClick={() => console.log(`ON-POST-CLICK`)}
					/>
				)}
			</div>
		)
	}
}

// selectTextInPost,
// onTextClick={() => selectTextInPost(post.textId)}

export default PostList
