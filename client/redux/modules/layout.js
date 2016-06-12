const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

export function toggleSidebar(sideOpen) {
  return (dispatch) => (
    dispatch({
      'type': TOGGLE_SIDEBAR,
      sideOpen,
    })
  )
}

export default function layout(state = {sideOpen: false}, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        sideOpen: action.sideOpen,
      }
    default:
      return state
  }
}

