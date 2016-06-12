import React from 'react'
import Toolbar from '../Toolbar/Toolbar'
import PostList from '../PostList/PostList'

class PostApp extends React.Component {
	static displayName = 'PostApp'

	render() {
		return (
			<div className="PostApp">
				<Toolbar {...this.props} />
				<PostList {...this.props}/>
			</div>
		)
	}
}

export default PostApp
