import * as AppActions from '../../redux/modules/app'
import * as LayoutActions from '../../redux/modules/layout'
import * as PostActions from '../../redux/modules/post'
import * as DashboardActions from '../../redux/modules/dashboard'

import React, { Component, PropTypes, cloneElement } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import cn from 'classnames'
import { isEqual, merge } from 'lodash'
import Navigation from '../../components/Navigation/Navigation'

// 'app': PropTypes.object.isRequired,

export class AppContainer extends Component {
  static displayName = 'AppContainer'

  static propTypes = {
    'params': PropTypes.object.isRequired,
    'appActions': PropTypes.object.isRequired,
    'postActions': PropTypes.object.isRequired,
    'layoutActions': PropTypes.object.isRequired,
    'layout': PropTypes.object.isRequired,
    'client': PropTypes.object.isRequired,
    'children': PropTypes.object.isRequired,
    'post': PropTypes.object,
    'visibilityFilter': PropTypes.string,
    'dashboard': PropTypes.object,
    'dashboardActions': PropTypes.object
  }

  static childContextTypes = {
    'client': PropTypes.object,
  }

  getChildContext() {
    return {
      'client': this.props.client,
    }
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.params, this.props.params)) window.scrollTo(0, 0)
  }

  render() {
    console.log('APP-COMP', this.props)

    // app,
    const {children, layout, layoutActions, appActions, postActions,
        client, post, visibilityFilter, dashboard,
        dashboardActions
         } = this.props

    const postProps = { post,
        visibilityFilter, dashboard}

    const navProps = {appActions, layoutActions, client, layout}
    const childProps = merge(appActions, client, postActions, postProps, dashboardActions)
    const appClasses = cn('App', `--${client.agent}`)

    return (
      <div className={appClasses}>
        <Navigation { ...navProps } />
        <div className="App-content">
          {cloneElement(children, childProps)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    'app': state.app,
    'client': state.client,
    'layout': state.layout,
    'post': state.post,
    'visibilityFilter': state.visibilityFilter,
    'dashboard': state.dashboard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    'appActions': bindActionCreators(AppActions, dispatch),
    'layoutActions': bindActionCreators(LayoutActions, dispatch),
    'postActions': bindActionCreators(PostActions, dispatch),
    'dashboardActions': bindActionCreators(DashboardActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer)
