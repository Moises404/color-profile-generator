import React, { PropTypes } from 'react'
import AddPost from '../AddPost/AddPost'
import AddText from '../AddText/AddText'
import AddTag from '../AddTag/AddTag'
import Filter from '../Filter/Filter'

class Toolbar extends React.Component {
  static displayName = 'Toolbar'

  static propTypes = {
    'dashboard': PropTypes.object,
    'dashboard.currentPostId': PropTypes.number,
    'dashboard.currentTextId': PropTypes.number
  }

  render() {
    return (
      <div className="Toolbar">
        <AddPost {...this.props} />
        <AddText {...this.props} />
        <AddTag {...this.props} />
        <Filter {...this.props}/>
        <div>{`CURRENT-POST-ID: ${this.props.dashboard.currentPostId}`}</div>
        <div>{`CURRENT-TEXT-ID: ${this.props.dashboard.currentTextId}`}</div>
      </div>
    )
  }
}

export default Toolbar
