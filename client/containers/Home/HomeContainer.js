import React from 'react'

import Patch from '../../components/Patch/Patch'

class HomeContainer extends React.Component {
  static displayName = 'HomeContainer'

  render() {
    return (
      <div className="Home">
        <Patch {...this.props}/>
      </div>
    )
  }
}

export default HomeContainer

