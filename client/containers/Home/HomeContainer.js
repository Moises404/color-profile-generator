import React from 'react'

import PostApp from '../../components/PostApp/PostApp'

class HomeContainer extends React.Component {
  static displayName = 'HomeContainer'

  render() {
    return (
      <div className="Home">
        <PostApp {...this.props}/>
      </div>
    )
  }
}

export default HomeContainer

