import React, {PropTypes} from 'react'
import Logo from '../Logo/Logo'
import {Link} from 'react-router'

class Navigation extends React.Component {
  static displayName = 'Navigation'

  static propTypes = {
    'layoutActions': PropTypes.object,
    'layout': PropTypes.object,
    'client': PropTypes.object,
    'db': PropTypes.object,
  }

  render() {
    const {client, layout, layoutActions} = this.props
    const {agent} = client

    const btnProps = {
      'className': 'Navigation-menu-btn',
      'onClick': layoutActions.toggleSidebar.bind(this, !layout.sideOpen),
    }

    const logoProps = {
      'to': '/',
      'onClick': layoutActions.toggleSidebar.bind(this, false),
    }

    return (
      <nav className="Navigation">
        {agent === 'mobile' ? <div {...btnProps} /> : null}
        <div className="Navigation-logo">
          <Link {...logoProps}>
            <Logo />
          </Link>
        </div>
        <a className="Navigation-github" href="http://github.com/moises404/artpost-react-dom" target="_blank">
          <div className="Navigation-github-icn" />
        </a>
      </nav>
    )
  }
}

export default Navigation
